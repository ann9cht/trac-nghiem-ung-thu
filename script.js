let activeLesson = null; 
let currentQuestionIndex = 0;
let userAnswers = {}; 
let currentFilter = 'all'; 
let activeIndices = [];

const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const lessonListEl = document.getElementById('lesson-list');

function initHome() {
    lessonListEl.innerHTML = '';
    database.forEach((lesson, index) => {
        const btn = document.createElement('button');
        btn.className = 'lesson-btn';
        btn.innerText = lesson.title;
        btn.onclick = () => startLesson(index);
        lessonListEl.appendChild(btn);
    });
}

function startLesson(index) {
    activeLesson = JSON.parse(JSON.stringify(database[index]));

    const isShuffleQ = document.getElementById('toggle-shuffle-q').checked;
    const isShuffleA = document.getElementById('toggle-shuffle-a').checked;

    if (isShuffleQ) shuffleArray(activeLesson.questions);

    if (isShuffleA) {
        activeLesson.questions.forEach(q => {
            let mappedOptions = q.options.map((opt, idx) => {
                return { text: opt, isCorrect: (idx === q.correctIndex) };
            });
            shuffleArray(mappedOptions);
            q.options = mappedOptions.map(o => o.text);
            q.correctIndex = mappedOptions.findIndex(o => o.isCorrect);
        });
    }

    currentQuestionIndex = 0;
    userAnswers = {}; 
    currentFilter = 'all';
    
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const allBtn = document.querySelector(".filter-btn[onclick*='all']");
    if(allBtn) allBtn.classList.add('active');
    
    activeIndices = [];
    for(let i = 0; i < activeLesson.questions.length; i++) {
        activeIndices.push(i);
    }
    
    document.getElementById('lesson-title').innerText = activeLesson.title;
    document.getElementById('total-count').innerText = activeLesson.questions.length;
    
    homeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    updateStats();
    renderIndexGrid();
    renderQuestion();
}

function renderQuestion() {
    if (activeIndices.length === 0) return;

    const questionData = activeLesson.questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = `Câu ${currentQuestionIndex + 1}: ${questionData.q}`;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    const prefix = ['A', 'B', 'C', 'D', 'E', 'F'];
    const isAnswered = userAnswers.hasOwnProperty(currentQuestionIndex);
    
    questionData.options.forEach((optText, optIndex) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<strong>${prefix[optIndex]}.</strong> ${optText}`;
        
        if (isAnswered) {
            btn.disabled = true;
            if (optIndex === questionData.correctIndex) {
                btn.classList.add('correct');
            } else if (optIndex !== questionData.correctIndex && userAnswers[currentQuestionIndex].selected === optIndex) {
                btn.classList.add('wrong'); 
            }
        } else {
            btn.onclick = () => selectAnswer(optIndex, btn);
        }
        optionsContainer.appendChild(btn);
    });

    updateIndexActiveState();
}

function selectAnswer(selectedIndex, btnElement) {
    const questionData = activeLesson.questions[currentQuestionIndex];
    const isCorrect = (selectedIndex === questionData.correctIndex);
    
    userAnswers[currentQuestionIndex] = {
        isCorrect: isCorrect,
        selected: selectedIndex
    };
    
    renderQuestion();
    updateStats();
    renderIndexGrid();

    const autoNext = document.getElementById('toggle-auto-next');
    if (autoNext && autoNext.checked) {
        setTimeout(() => {
            nextQuestion();
        }, 750);
    }
}

function prevQuestion() {
    if (activeIndices.length === 0) return;
    const currentIndexPos = activeIndices.indexOf(currentQuestionIndex);
    
    if (currentIndexPos > 0) {
        currentQuestionIndex = activeIndices[currentIndexPos - 1];
    } else {
        currentQuestionIndex = activeIndices[activeIndices.length - 1]; // Quay đuôi
    }
    renderQuestion();
}

function nextQuestion() {
    if (activeIndices.length === 0) return;
    const currentIndexPos = activeIndices.indexOf(currentQuestionIndex);
    
    if (currentIndexPos !== -1 && currentIndexPos < activeIndices.length - 1) {
        currentQuestionIndex = activeIndices[currentIndexPos + 1];
    } else {
        currentQuestionIndex = activeIndices[0]; // Quay đầu
    }
    renderQuestion();
}

function redoMistakes() {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    
    for (let i = 0; i < activeLesson.questions.length; i++) {
        if (userAnswers.hasOwnProperty(i) && !userAnswers[i].isCorrect) {
            delete userAnswers[i];
        }
    }

    currentFilter = 'redo';
    activeIndices = calculateFilteredIndices(); 
    
    if (activeIndices.length > 0) {
        currentQuestionIndex = activeIndices[0]; 
        updateStats();
        renderIndexGrid();
        renderQuestion();
    } else {
        document.getElementById('custom-modal').classList.remove('hidden');
    }
}

function calculateFilteredIndices() {
    let indices = [];
    for (let i = 0; i < activeLesson.questions.length; i++) {
        const isAnswered = userAnswers.hasOwnProperty(i);
        
        if (currentFilter === 'answered' && !isAnswered) continue;
        if (currentFilter === 'redo' && isAnswered && userAnswers[i].isCorrect) continue;
        
        indices.push(i);
    }
    return indices;
}

function applyFilter(value, btnElement = null) {
    currentFilter = value;
    
    if (btnElement) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        btnElement.classList.add('active');
    }

    activeIndices = calculateFilteredIndices(); 
    
    if (activeIndices.length > 0) {
        if (!activeIndices.includes(currentQuestionIndex)) {
            currentQuestionIndex = activeIndices[0];
        }
        renderIndexGrid();
        renderQuestion();
    } else {
        renderIndexGrid();
        document.getElementById('question-text').innerText = "Bạn chưa làm câu nào cả!";
        document.getElementById('options-container').innerHTML = '';
    }
}

function renderIndexGrid() {
    const grid = document.getElementById('question-index');
    grid.innerHTML = '';
    
    activeIndices.forEach(i => {
        const item = document.createElement('div');
        item.className = 'index-item';
        item.innerText = i + 1;
        
        item.onclick = () => {
            currentQuestionIndex = i;
            renderQuestion();
        };

        if (userAnswers.hasOwnProperty(i)) {
            if (userAnswers[i].isCorrect) item.classList.add('answered-correct');
            else item.classList.add('answered-wrong');
        }
        
        grid.appendChild(item);
    });
    updateIndexActiveState();
}

function updateIndexActiveState() {
    const items = document.querySelectorAll('.index-item');
    activeIndices.forEach((realIndex, domIndex) => {
        if (items[domIndex]) {
            items[domIndex].classList.remove('active');
            if (realIndex === currentQuestionIndex) items[domIndex].classList.add('active');
        }
    });
}

function updateStats() {
    const totalAnswered = Object.keys(userAnswers).length;
    let correctCount = 0;
    for (let key in userAnswers) {
        if (userAnswers[key].isCorrect) correctCount++;
    }
    document.getElementById('completed-count').innerText = totalAnswered;
    document.getElementById('correct-count').innerText = correctCount;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

function goHome() {
    quizScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('custom-modal').classList.add('hidden');
}

document.addEventListener('keydown', function(event) {
    if (!quizScreen.classList.contains('hidden')) {
        if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
            nextQuestion();
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
            prevQuestion();
        }
    }
});

initHome();