renderData ();

const openFormButton = document.querySelector ('#open-form');
const closeFormButton = document.querySelector ('#close-form');
const form = document.querySelector ('.form-input');
const editForm = document.querySelector ('.form-edit');

const userName = document.querySelector ('#username');
const dateOfBirth = document.querySelector ('#date-of-birth');
const email = document.querySelector ('#email');
const password = document.querySelector ('#password');
const phoneNumber = document.querySelector ('#phone-number');
const address = document.querySelector ('#address');

const userNameEdit = document.querySelector ('#username-edit');
const dateOfBirthEdit = document.querySelector ('#date-of-birth-edit');
const emailEdit = document.querySelector ('#email-edit');
const passwordEdit = document.querySelector ('#password-edit');
const phoneNumberEdit = document.querySelector ('#phone-number-edit');
const addressEdit = document.querySelector ('#address-edit');

// ------------------- open - close form ---------------------
openFormButton.addEventListener ('click', () => {
    openForm ();
});
closeFormButton.addEventListener ('click', () => {
    closeForm ();
});

document.querySelector ('.close-edit-form').addEventListener ('click', () => {
    closeEditForm ();
});

// --------------------- upload form -------------------------------
let uploadButton = document.querySelector ('#upload');

uploadButton.addEventListener ('click', (e) => {
    e.preventDefault ();

    // create user obj
    if (!checkValidEmail (email.value)) {
        alert('email không hợp lệ');
        return;
    }

    if (!checkValidPassword (password.value)) {
        alert('mật khẩu không hợp lệ');
        return;
    }

    const users = {
        userId: Math.floor (Math.random () * 10000),
        userName: userName.value,
        dateOfBirth: dateOfBirth.value,
        email: email.value,
        password: password.value,
        phoneNumber: phoneNumber.value,
        address: address.value,
        createdDate: formatDate (new Date ())
    }

    let serverData = localStorage.getItem ('users');

    if (serverData === null) {
        serverData = [];
    } else {
        serverData = JSON.parse (serverData);
    }

    serverData.push (users);

    localStorage.setItem ('users', JSON.stringify (serverData));


    resetForm ();
    renderData ();
});

// --------------------------- edit form ---------------------------
const updateBtn = document.querySelector ('.update');

updateBtn.addEventListener ('click', (e) => {
    e.preventDefault ();
    const serverData = JSON.parse (localStorage.getItem ('users'));
    const index = serverData.findIndex ((item) => item.userId == editForm.id);
    const userData = serverData[index];
    console.log(serverData);
    const users = {
        userId: editForm.id,
        userName: userNameEdit.value,
        dateOfBirth: dateOfBirthEdit.value,
        email: emailEdit.value,
        password: passwordEdit.value,
        phoneNumber: phoneNumberEdit.value,
        address: addressEdit.value,
        createdDate: userData.createdDate
    }

    serverData[index] = users;

    localStorage.setItem ('users', JSON.stringify (serverData));

    renderData ();
});





// delete button
const deleteBtn = document.querySelectorAll ('.delete');

deleteBtn.forEach (Element => {
    Element.addEventListener ('click', (event) => {
        deleteUser (event.target.id);
        renderData ();
    });
});

// edit button
const editBtn = document.querySelectorAll ('.edit');

editBtn.forEach (Element => {
    Element.addEventListener ('click', (event) => {
        openEditForm (event.target.id);
    });
});



// ------------ fucnction --------------

function deleteUser (id) { // remove data in localStorange from id
    const serverData = JSON.parse (localStorage.getItem ('users'));
    const result = serverData.filter ((item) => item.userId !== id);

    localStorage.setItem ('users', JSON.stringify (result));
}

function openEditForm (id) {
    editForm.style.display = 'block';
    const serverData = JSON.parse (localStorage.getItem ('users'));
    const userData = serverData.filter ((item) => item.userId == id)[0];
    userNameEdit.value = userData.userName;
    dateOfBirthEdit.value = userData.dateOfBirth;
    emailEdit.value = userData.email;
    passwordEdit.value = userData.password;
    phoneNumberEdit.value = userData.phoneNumber;
    addressEdit.value = userData.address;

    editForm.id = userData.userId;

}

function resetForm () { //dùng để reset form
    userName.value = '';
    dateOfBirth.value = '';
    email.value = '';
    password.value = '';
    phoneNumber.value = '';
    address.value = '';
}


function renderData () { // dùng để render dữ liệu trong table
    const data = localStorage.getItem ('users');
    if (data === null) {
        return false;
    }

    const render = JSON.parse (data).map ((data, index) => {
        return `
        <tr id="${data.userId}">
            <td>${index + 1}</td>
            <td>${data.userName}</td>
            <td>${data.dateOfBirth}</td>
            <td>${data.email}</td>
            <td>${data.phoneNumber}</td>
            <td>${data.address}</td>
            <td><button id="${data.userId}" class="edit">Sửa</button></td>
            <td><button id="${data.userId}" class="delete">Xóa</button></td>
        </tr>`;
    });

    let tbody = document.querySelector ('#tbody');
    tbody.innerHTML = render.join (''); 
}


function closeForm () { // đóng form
    form.style.display = 'none';
}

function openForm () { // mở form
    form.style.display = 'block';
}

function closeEditForm () { // đóng form
    editForm.style.display = 'none';
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
 * format date to dd/mm/yyyy
 * @param {*} dates 
 * @returns 
 */
function formatDate (dates) {
    let date = new Date (dates);
    let day = date.getDate ().toString ().padStart (2, 0);
    let month = date.getMonth ().toString ().padStart (2, 0);
    let year = date.getFullYear ();
    return `${day}/${month}/${year}`;
}