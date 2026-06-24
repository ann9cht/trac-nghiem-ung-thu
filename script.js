let activeLesson = null;
let currentQuestionIndex = 0;
let userAnswers = {};
let currentFilter = 'all';
let activeIndices = [];
let autoNextTimeout = null;
let activeLessonIndex = null;
let flaggedIndices = [];

const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const lessonListEl = document.getElementById('lesson-list');
const confirmModalEl = document.getElementById('confirm-modal');

//function initHome() {
//    lessonListEl.innerHTML = database.map((l, i) => `<button class="lesson-btn" onclick="startLesson(${i})">${l.title}</button>`).join('');
//}

function initHome() {
    lessonListEl.innerHTML = database.map((l, i) => {
        const badgeHtml = l.badge ? `<span class="l-badge ${l.badgeType || ''}">${l.badge}</span>` : '';
        return `<button class="lesson-btn" onclick="startLesson(${i})">
                    <span class="l-title">${l.title}</span>
                    ${badgeHtml}
                </button>`;
    }).join('');
}

function startLesson(index) {
    activeLessonIndex = index;
    const savedData = localStorage.getItem('quiz_lesson_' + index);
    const currentDataString = JSON.stringify(database[index]);
    
    if (savedData) {
        const parsed = JSON.parse(savedData);
        
        if (parsed.originalData !== currentDataString) {
            localStorage.removeItem('quiz_lesson_' + index);
            return startLesson(index);
        }
        
        ({ lesson: activeLesson, answers: userAnswers, currentIndex: currentQuestionIndex, flags: flaggedIndices } = parsed);
        if (!flaggedIndices) flaggedIndices = [];
    } else {
        activeLesson = JSON.parse(currentDataString);
        
        if (document.getElementById('toggle-shuffle-q').checked) {
            shuffleArray(activeLesson.questions);
        }
        
        if (document.getElementById('toggle-shuffle-a').checked) {
            activeLesson.questions.forEach(q => {
                if (q.keepOrder) return;
                let mappedOptions = q.options.map((text, idx) => ({ text, isCorrect: idx === q.correctIndex }));
                shuffleArray(mappedOptions);
                q.options = mappedOptions.map(o => o.text);
                q.correctIndex = mappedOptions.findIndex(o => o.isCorrect);
            });
        }
        
        currentQuestionIndex = 0;
        userAnswers = {};
        flaggedIndices = [];
    }
    
    applyFilter('all');
    homeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    document.getElementById('lesson-title').innerText = activeLesson.title;
    document.getElementById('total-count').innerText = activeLesson.questions.length;
    renderAll();
}

function renderAll() {
    updateStats();
    renderIndexGrid();
    renderQuestion();
}

function renderQuestion() {
    if (!activeIndices.length) return;
    
    if (autoNextTimeout) {
        clearTimeout(autoNextTimeout);
        autoNextTimeout = null;
    }
    
    saveProgress();
    const q = activeLesson.questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = `Câu ${currentQuestionIndex + 1}: ${q.q}`;
    
    const prefix = ['A', 'B', 'C', 'D', 'E', 'F'];
    const isAns = userAnswers.hasOwnProperty(currentQuestionIndex);
    
    document.getElementById('options-container').innerHTML = q.options.map((opt, i) => `
        <button class="option-btn ${isAns ? (i === q.correctIndex ? 'correct' : (userAnswers[currentQuestionIndex].selected === i ? 'wrong' : '')) : ''}" onclick="selectAnswer(${i})" ${isAns ? 'disabled' : ''}>
            <strong>${prefix[i]}.</strong> ${opt}
        </button>
    `).join('');
    
    updateIndexActiveState();
    
    const mobileFlagBtn = document.getElementById('mobile-flag-btn');
    if (mobileFlagBtn) {
        mobileFlagBtn.innerText = flaggedIndices.includes(currentQuestionIndex) ? 'Gỡ cờ' : 'Gắn cờ';
    }
}

function selectAnswer(i) {
    userAnswers[currentQuestionIndex] = {
        isCorrect: i === activeLesson.questions[currentQuestionIndex].correctIndex,
        selected: i
    };
    renderAll();
    
    if (document.getElementById('toggle-auto-next').checked) {
        autoNextTimeout = setTimeout(() => {
            const currentPos = activeIndices.indexOf(currentQuestionIndex);
            let targetIndex = currentQuestionIndex;

            for (let j = 1; j < activeIndices.length; j++) {
                let checkPos = (currentPos + j) % activeIndices.length;
                let realIndex = activeIndices[checkPos];
                if (!userAnswers.hasOwnProperty(realIndex)) {
                    targetIndex = realIndex;
                    break;
                }
            }

            if (targetIndex !== currentQuestionIndex) {
                currentQuestionIndex = targetIndex;
                renderQuestion();
            }
        }, 750);
    }
}

function moveIndex(dir) {
    if (!activeIndices.length) return;
    const pos = activeIndices.indexOf(currentQuestionIndex);
    currentQuestionIndex = activeIndices[(pos + dir + activeIndices.length) % activeIndices.length];
    renderQuestion();
}

const prevQuestion = () => moveIndex(-1);
const nextQuestion = () => moveIndex(1);

function redoMistakes() {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    
    for (let i = 0; i < activeLesson.questions.length; i++) {
        if (userAnswers[i] && (!userAnswers[i].isCorrect || flaggedIndices.includes(i))) {
            delete userAnswers[i];
        }
    }
    
    currentFilter = 'redo';
    activeIndices = calculateFilteredIndices();
    
    if (activeIndices.length) {
        currentQuestionIndex = activeIndices[0];
        renderAll();
    } else {
        document.getElementById('custom-modal').classList.remove('hidden');
    }
}

function calculateFilteredIndices() {
    return activeLesson.questions.map((_, i) => i)
        .filter(i => currentFilter === 'all' || (currentFilter === 'answered' && userAnswers[i]) || (currentFilter === 'redo' && (!userAnswers[i] || !userAnswers[i].isCorrect || flaggedIndices.includes(i))))
        .sort((a, b) => (flaggedIndices.includes(a) ? -1 : 1) - (flaggedIndices.includes(b) ? -1 : 1) || a - b);
}

function applyFilter(value, btnElement = null) {
    currentFilter = value;
    if (btnElement) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        btnElement.classList.add('active');
    }
    
    activeIndices = calculateFilteredIndices();
    
    if (activeIndices.length) {
        if (!activeIndices.includes(currentQuestionIndex)) {
            currentQuestionIndex = activeIndices[0];
        }
        renderAll();
    } else {
        renderIndexGrid();
        document.getElementById('question-text').innerText = "Bạn chưa làm câu nào cả!";
        document.getElementById('options-container').innerHTML = '';
    }
}

function renderIndexGrid() {
    document.getElementById('question-index').innerHTML = activeIndices.map(i => `
        <div class="index-item ${i === currentQuestionIndex ? 'active' : ''} ${userAnswers[i] ? (userAnswers[i].isCorrect ? 'answered-correct' : 'answered-wrong') : ''}" onclick="jumpTo(${i})">
            ${i + 1}
            <span class="flag-btn ${flaggedIndices.includes(i) ? 'flagged' : ''}" onclick="toggleFlag(${i}, event)">🚩</span>
        </div>
    `).join('');
    updateIndexActiveState();
}

function updateIndexActiveState() {
    document.querySelectorAll('.index-item').forEach((item, idx) => {
        item.classList.toggle('active', activeIndices[idx] === currentQuestionIndex);
    });
}

function updateStats() {
    const keys = Object.keys(userAnswers);
    document.getElementById('completed-count').innerText = keys.length;
    document.getElementById('correct-count').innerText = Object.values(userAnswers).filter(a => a.isCorrect).length;
    
    if (activeLesson) {
        document.getElementById('quiz-progress').style.width = (keys.length / activeLesson.questions.length * 100) + '%';
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function jumpTo(i) {
    currentQuestionIndex = i;
    renderQuestion();
    if (window.innerWidth <= 768) {
        switchMobileTab('question');
    }
}

function toggleFlag(i, e) {
    e.stopPropagation();
    const pos = flaggedIndices.indexOf(i);
    if (pos > -1) {
        flaggedIndices.splice(pos, 1);
    } else {
        flaggedIndices.push(i);
    }
    saveProgress();
    activeIndices = calculateFilteredIndices();
    renderIndexGrid();
    if (i === currentQuestionIndex) {
        renderQuestion();
    }
}

function toggleFlagCurrent() {
    toggleFlag(currentQuestionIndex, { stopPropagation: () => {} });
}

function goHome() {
    quizScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('custom-modal').classList.add('hidden');
}

function resetLesson() {
    if (activeLessonIndex !== null) {
        confirmModalEl.classList.remove('hidden');
    }
}

function closeConfirmModal() {
    confirmModalEl.classList.add('hidden');
}

function handleConfirmReset() {
    localStorage.removeItem('quiz_lesson_' + activeLessonIndex);
    closeConfirmModal();
    startLesson(activeLessonIndex);
}

function saveProgress() {
    if (activeLessonIndex !== null) {
        localStorage.setItem('quiz_lesson_' + activeLessonIndex, JSON.stringify({
            originalData: JSON.stringify(database[activeLessonIndex]),
            lesson: activeLesson,
            answers: userAnswers,
            currentIndex: currentQuestionIndex,
            flags: flaggedIndices
        }));
    }
}

function switchMobileTab(tab) {
    const q = document.getElementById('tab-question');
    const i = document.getElementById('tab-index');
    if (tab === 'index') {
        quizScreen.classList.add('show-mobile-index');
        i.classList.add('active');
        q.classList.remove('active');
    } else {
        quizScreen.classList.remove('show-mobile-index');
        q.classList.add('active');
        i.classList.remove('active');
    }
}

document.addEventListener('keydown', e => {
    if (quizScreen.classList.contains('hidden')) return;
    const pos = activeIndices.indexOf(currentQuestionIndex);
    if (pos === -1) return;
    
    const k = e.key.toLowerCase();
    const c = e.code;
    
    if (c === 'KeyW' || k === 'arrowup') {
        if (pos >= 5) jumpTo(activeIndices[pos - 5]);
    } else if (c === 'KeyS' || k === 'arrowdown') {
        if (pos + 5 < activeIndices.length) jumpTo(activeIndices[pos + 5]);
    } else if (c === 'KeyA' || k === 'arrowleft') {
        prevQuestion();
    } else if (c === 'KeyD' || k === 'arrowright') {
        nextQuestion();
    } else if (c === 'KeyQ') {
        goHome();
    } else if (c === 'KeyR') {
        redoMistakes();
    } else if (c === 'KeyF') {
        toggleFlagCurrent();
    } else if (['1', '2', '3', '4'].includes(k)) {
        const btns = document.querySelectorAll('#options-container .option-btn');
        const idx = parseInt(k) - 1;
        if (btns[idx] && !btns[idx].disabled) btns[idx].click();
    }
});

initHome();