// -------------------- function ------------------------


/**
 * product: obj cần thêm dữ liệu
 **/
function createProduct (product) {
    for (key in product) {
        let value = prompt (`Nhập ${key} sản phẩm`);
        if (value == null) {
            return null;
            break;
        }

        /Id/.test (key) ? value = +value : ''; // định dạng số cho id và giá
        if (key == 'createdAt') {
           value = formatDate (value);
        }
        product[key] = value;
    }

    return product;
}

/**
 * 
 * @param {user} user
 * @returns 
 */
function createUser (user) {
    for (key in user) {
        let value = prompt (`Nhập ${key}`);
        if (value === null) {
            return null;
        }
        if (key == 'email') {
            while (1) {
                if (!checkValidEmail (value)) {
                    value = prompt ('email sai định dạng, vui lòng nhập lại');
                } else {
                    break;
                }
            }
        }

        if (key == 'password') {
            while (1) {
                if (!checkValidPassword (value)) {
                    value = prompt ('mật khẩu không ít hơn 8 kí tự');
                } else {
                    break;
                }
            }
        }

        if (key == 'createdAt') {
            value = formatDate (value);
        }

        if (key == 'userId') {
            value = +value;
        }
        user[key] = value;
    }
    return user;
}

/**
 * listObj là danh sách object cần kiểm tra 
 * key: là thuộc tính
 * value: là giá trị thuộc  tính
 * false là không trùng lặp
 * true là bị trùng lặp
 **/
function checkRepeat (listObj, key, value) {
    for (let i = 0; i < listObj.length; i++) {
        if (listObj[i][key] === value) {
            return true;
        }
    }

    return false;
}

/**
 * listObj: danh sách cần kiểm tra
 * key: thuộc tính kiểm tra
 * value: dữ liệu
 * */
function search (listObj, key, value) {
    const result = [];
    for (let i = 0; i < listObj.length; i++) {
        if (listObj[i][key] === value) {
            result.push (listObj[i]);
        }
    }

    return result;
}


/**
 * dates: thời gian cần định dạng dd/mm/yyyy
 **/
function formatDate (dates) {
    let date = new Date (dates);
    let day = date.getDate ().toString ().padStart (2, 0);
    let month = date.getMonth ().toString ().padStart (2, 0);
    let year = date.getFullYear ();
    return `${day}/${month}/${year}`;
}


/**
 * listObj: danh sách obj sản phẩm
 * key: thuộc tính cần so sánh
 * value: giá trị cần kiểm tra
 * */
function priceFilter (listObj, key, value) {
    const result = [];
    for (let i = 0; i < listObj.length; i++) {
        if (listObj[i][key] > value) {
            result.push (listObj[i]);
        }
    }
    return result;
}




/**
         * dates: thời gian cần định dạng dd/mm/yyyy
         **/
function formatDate (dates) {
    let date = new Date (dates);
    let day = date.getDate ().toString ().padStart (2, 0);
    let month = date.getMonth ().toString ().padStart (2, 0);
    let year = date.getFullYear ();
    return `${day}/${month}/${year}`;
}

/**
 * email: email cần check
 * Author: Đăng Dizi
 * */
function checkValidEmail (email) {
    let regex = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,}/;
    return regex.test (email);
}


/**
 * password: mật khẩu cần so sánh
 * */
function checkValidPassword (password) {
    if (password.length < 8) {
        return false;
    }
    return true;
}

/**
 * 
 * @param {*} listObj mảng cần tìm
 * @param {*} value giá trị cần tìm
 * @returns list object
 */
function searchUser (listObj, value) {
    const result = [];
    for (let i = 0; i < listObj.length; i++) {
        const obj = listObj[i];

        if (value === obj.userName || value === obj.email) {
            result.push (obj);
        }
        
    }

    return result;
}

function signIn (listObj, user, password) {
    for (let i = 0; i < listObj.length; i++) {
        const obj = listObj[i];

        if (user === obj.email || user === obj.userName && password === password) {
            return true;
        }
    }
    return false;
}