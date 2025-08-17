document.addEventListener('DOMContentLoaded', function() {
    // Initialize accounts array
    let accounts = [];
    
    // Load accounts from localStorage if available
    if (localStorage.getItem('accounts')) {
        accounts = JSON.parse(localStorage.getItem('accounts'));
    }
    
    // Get DOM elements
    const passwordInput = document.getElementById('password');
    const togglePassword = document.querySelector('.toggle-password');
    const iceberg = document.querySelector('.iceberg-middle');
    const loginForm = document.getElementById('loginForm');
    
    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        iceberg.classList.toggle('show-password', type === 'text');
        
        // Change the eye icon
        this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
    });
    
    // Handle form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = passwordInput.value;
        
        // Check if account exists
        const accountExists = accounts.some(acc => acc.email === email && acc.password === password);
        
        if (accountExists) {
            alert('Erfolgreich angemeldet!');
        } else {
            // Add new account if it doesn't exist
            const newAccount = { email, password };
            accounts.push(newAccount);
            localStorage.setItem('accounts', JSON.stringify(accounts));
            alert('Neuer Account erstellt und angemeldet!');
        }
    });
});
