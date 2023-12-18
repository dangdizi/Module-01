import getE from "./utils/module.js";
import { getLocal } from "./utils/module.js";
import { formatDate } from "./utils/module.js";
import { updateLocal } from "./utils/module.js";
// ---- navbar slide show ----
let navbarOpen = true;
getE('.handler-navbar').addEventListener('click', () => {
    const navbar = getE ('.navbar');
    navbarOpen = !navbarOpen;

    if (navbarOpen == false) {
        navbar.classList.add ('navbar-close');
        navbar.classList.remove ('navbar-open');
    } else {
        navbar.classList.add ('navbar-open');
        navbar.classList.remove ('navbar-close');
    }
});


// -------- tooltips -------
let tooltipsOpen = false;
getE ('#drop').addEventListener ('click', () => {
    const tooltips = getE ('.profile-tooltips');
    tooltipsOpen = !tooltipsOpen;

    if (tooltipsOpen == true) {
        tooltips.classList.add ('tooltips-open');
        tooltips.classList.remove ('tooltips-close');
    } else {
        tooltips.classList.add ('tooltips-close');
        tooltips.classList.remove ('tooltips-open');
    }
});

getE ('body').addEventListener ('click', (event) => {
    if (tooltipsOpen == true && event.target.id != 'drop') {
        const tooltips = getE ('.profile-tooltips');
        tooltips.classList.add ('tooltips-close');
        tooltips.classList.remove ('tooltips-open');
        tooltipsOpen = !tooltipsOpen;
    }
});


getE ('#table-search').addEventListener ('change', () => {
    if (getE ('#table-search').value == '') {
        renderTable (getLocal ('users'));
    } else {
        searchUser ();
    }
});



getE ('.close-modal', true).forEach ((element) => {
    element.addEventListener ('click', (event) => {
        closeModal ();
    });
});

getE ('.confirm-button').addEventListener ('click', (event) => {
    const userId = event.target.id;
    lockUser (userId);
    closeModal ();
    renderTable (getLocal ('users'));
});




renderTable (getLocal ('users'));






function closeModal () {
    const modal = getE ('.modal');
    const modalBox = getE ('.modal-box');

    modalBox.style.visibility = 'hidden';

    modal.style.display = 'none';
    modalBox.classList.add ('modal-open');
}


function openModal (id) {
    const modalBtn = getE ('.confirm-button');
    const modal = getE ('.modal');
    const modalBox = getE ('.modal-box');

    modal.style.opacity = '1';
    modal.style.display = 'flex';

    modalBox.style.visibility = 'visible';
    modalBox.classList.add ('modal-open');

    modalBtn.id = id;


}





// --------- search --------

function searchUser () {
    const local = getLocal ('users');
    const result = local.filter ((data) => {
        return data.userName == getE ('#table-search').value;
    });

    
    renderTable (result);
    alert('tìm kiếm thành công! có ' + result.length + ' kết quả');

}

function lockUser (userId) {
    let local = getLocal ('users');
    const index = local.findIndex ((data) => {
       return data.userId == userId;
    });
    
    local[index]['status'] = !local[index]['status'];

    localStorage.setItem ('users', JSON.stringify (local));
}





// -------------- table render ---------------

function renderTable (localData = null) {
    const local = localData;
    let result = local.map ((data, index) => {
        const stt = data.status == true ? "Đang Hoạt Động" : "Ngừng Hoạt Động";

        const gender = data.gender == 0 ? "Nam" : data.gender == 1 ? "Nữ" : "Khác";
        return `
        <tr>
            <td>${index + 1}</td>
            <td>${data.userName}</td>
            <td>${gender}</td>
            <td>${formatDate (data.dateOfBirth)}</td>
            <td>${data.address}</td>
            <td>${stt}</td>
            <td>
                <button value="${data.userName}" class="${data.status == false ? "red " : ""}change" id="${data.userId}"><i class="fa-sharp fa-solid fa-lock"></i></button>
                <button><i class="fa-sharp fa-regular fa-eye"></i></button>
            </td>
        </tr>
        `;

    });
    
    getE ('#tbody').innerHTML = result.join ('');

    getE ('.change', true).forEach ((element) => {
        element.addEventListener ('click', (event) => {
            openModal (element.id);
            getE ('#answer').innerHTML = `bạn có chắc chắc muốn thay đổi trạng thái tài khoản <b>${element.value}</b> không?`;
        });
    });
}