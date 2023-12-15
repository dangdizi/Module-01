
// ------------------------- function --------------------

/**
 * 
 * @returns kiểm tra các trường input
 */
function checkValid () {
    if (username.value == '') {
        alert('Tên không được để trống!');
    }else if (email.value == '') {
        alert('email không được bỏ trống!');
    } else if (password.value == '') {
        alert('mật khẩu không được bỏ trống!');
    } else if (rePassword.value == '') {
        alert ('hãy nhập lại mật khẩu!');
    } else if (!checkValidEmail (email.value)) {
        alert('email không đúng định dạng');
    } else if (!policy.checked) {
        alert('vui lòng đồng ý điều khoản!');
    } else {
        return true;
    }
}



/**
 * lấy giá trị của giới tính
 * @returns 
 */
function getGender () {
    let result = '';

    gender.forEach(element => {
        if (element.checked) {
            result = element.value;
            return;
        }
    });

    return result;
}


/**
 * đăng ký tài khoản
 */
function signUp () {
    let userId = Math.floor (Math.random () * 100000);

    const users = {
        userId: userId,
        userName: username.value,
        gender: getGender(),
        dateOfBirth: dateOfBirth.value,
        email: email.value,
        password: password.value
    }
    reUpLocal ('users', users);

    window.location = 'login.html';
}


/**
 * đăng nhập
 */
function login () {
    const local = JSON.parse (localStorage.getItem ('users'));
    const find = local.filter ((data) => {
        return data.email == email.value && data.password == password.value;
    });

    if (find.length >= 1) {
        return true;
    } else {
        return false;
    }
}

/**
 * dùng để thêm 1 phần tử trên localstorange
 * @param {tên lưu trữ trên local} localName 
 * @param {data cần upload} localData 
 */
function reUpLocal (localName, localData) {
    let local = JSON.parse (localStorage.getItem (localName));
    if (local === null) {
        local = [];
    }

    local.push (localData);

    localStorage.setItem (localName, JSON.stringify (local));
}


/**
 * email cần kiểm tra định dạng
 * @param {*} email 
 * @returns 
 */
function checkValidEmail (email) {
    let regex = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,}/;
    return regex.test (email);
}

/**
 * mật khẩu cần kiểm tra
 * @param {*} password 
 * @returns 
 */
function checkValidPassword (password) {
    if (password.length < 8) {
        return false;
    }
    return true;
}