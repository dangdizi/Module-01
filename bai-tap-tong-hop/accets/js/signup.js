import getE from "./utils/module.js";
import { getLocal } from "./utils/module.js";
import { updateLocal } from "./utils/module.js";
getE ('#signUp').addEventListener ('click', (event) => {
    event.preventDefault ();

    if (getE ('#username').value === '') {
        alert ('Họ tên không được để trống!');
        return;
    }

    if (!checkValidEmail (getE ('#email').value)) {
        return;
    }

    if (!checkValidPassword (getE ('#password').value)) {
        return;
    }

    if (getE ('#password').value != getE ('#re-password').value) {
        alert ('Mật khẩu không trùng khớp!');
        return;
    }


    signUp ();

});





/**
 * 
 * @returns không có return
 */
function signUp () {

    let local = getLocal ('users');

    const find = local.find ((data) => {return data.email == getE ('#email').value});
   
    if (find) {
        alert('Email đã tồn tại trên hệ thống!');
        return;
    }

    const users = {
        userId: Math.floor (Math.random () * 100000),
        userName: getE ('#username').value,
        email: getE ('#email').value,
        gender: 0,
        dateOfBirth: '',
        address: '',
        status: true,
        createdAt: new Date ().toString ()
    }

    updateLocal ('users', users);

    alert('Đăng ký tài khoản thành công!');
}

/**
 * email: email cần check
 * Author: Đăng Dizi
 * */
function checkValidEmail (email) {
    const regex = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,}/;
    const result = regex.test (email);
    if (email == '') {
        alert ('email không được để trống!');
        return result;
    }
    if (result === false) {
        alert('Email không đúng định dạng!');
    }
    return result;
}


/**
 * password: mật khẩu cần so sánh
 * */
function checkValidPassword (password) {
    if ( password == '') {
        alert('Mật khẩu không được để trống!');
        return false;
    }
    if (password.length < 8) {
        alert ('mật khẩu phải có hơn 8 kí tự');
        return false;
    }
    return true;
}