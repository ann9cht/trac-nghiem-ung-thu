function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('quiz_theme', isDark ? 'dark' : 'light');
}

(function initTheme() {
    if (localStorage.getItem('quiz_theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
})();