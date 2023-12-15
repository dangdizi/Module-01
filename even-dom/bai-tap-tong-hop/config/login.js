const email = document.querySelector ('#email');
const password = document.querySelector ('#password');

const loginBtn = document.querySelector ('#login');

loginBtn.addEventListener ('click', (event) => {
    event.preventDefault ();
    
    if (email.value == '') {
        alert('vui lòng nhập email!');
        return;
    }

    if (password.value == '') {
        alert ('vui lòng nhập mật khẩu!');
        return;
    }

    const loginResult = login ();

    if (loginResult) {
        alert ('Đăng nhập thành công!');
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }

});
