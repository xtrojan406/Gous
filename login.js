if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify({
        utdd7utgxugx: { password: "utsus7t", expires: null },  
        utdutxgixiug: { password: "utsutxi", expires: null }  
    }));
}


function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('loginError');

    
    const users = JSON.parse(localStorage.getItem('users'));

    if (users[username]) {
        
        const expires = users[username].expires;
        const currentDate = new Date();

        if (expires && new Date(expires) < currentDate) {
            loginError.textContent = 'Akun ini telah kadaluarsa.';
            loginError.style.display = 'block';
            return;
        }

        
        if (users[username].password === password) {
            if (username === 'admin') {
                
                window.location.href = 'admin.html';
            } else {
                 
                window.location.href = 'main.html';
            }
        } else {
            loginError.textContent = 'Password salah.';
            loginError.style.display = 'block';
        }
    } else {
        loginError.textContent = 'Username tidak ditemukan.';
        loginError.style.display = 'block';
    }
}
