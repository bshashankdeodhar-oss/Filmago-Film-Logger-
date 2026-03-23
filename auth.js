// auth.js
// Included at the top of protected HTML files to prevent unauthenticated access flash

(function checkAuth() {
    const token = localStorage.getItem('filmago_token');
    if (!token || token === 'undefined' || token === 'null' || token.trim() === '') {
        window.location.replace('login.html'); // instantly redirect
    }
})();
