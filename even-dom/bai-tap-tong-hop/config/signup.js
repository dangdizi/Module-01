// khai báo các input Element
const username = document.querySelector ('#username');
const gender = document.querySelectorAll ('input[name=gender]');
const dateOfBirth = document.querySelector ('#date-of-birth');
const email = document.querySelector ('#email');
const password = document.querySelector ('#password');
const rePassword = document.querySelector ('#repassword');
const policy = document.querySelector ('#policy');

const signUpBtn = document.querySelector ('#signUp');

// ------------------------- listen event -------------------------------
// signup button event
signUpBtn.addEventListener ('click', (event) => {
    event.preventDefault ();
    
    if (!checkValid ()) {
        return;
    }

    if (password.value !== rePassword.value) {
        alert('mật khẩu không trùng nhau');
        return;
    }

    signUp ();

}); 








