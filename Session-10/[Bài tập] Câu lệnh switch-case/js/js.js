function monthToDays () {
    let month = +document.getElementById ('month').value;
    let element = document.getElementById ('result');
    switch (month) {
        case 1:
            element.innerHTML = 'Tháng 1 có 31 ngày';
            break;
        case 2:
            element.innerHTML = 'Tháng 2 có 28 hoặc 29 ngày';
            break;
        case 3:
            element.innerHTML = 'Tháng 3 có 31 ngày';
            break;
        case 4:
            element.innerHTML = 'Tháng 4 có 30 ngày';
            break;
        case 5:
            element.innerHTML = 'Tháng 5 có 31 ngày';
            break;
        case 6:
            element.innerHTML = 'Tháng 6 có 30 ngày';
            break;
        case 7:
            element.innerHTML = 'Tháng 7 có 30 ngày';
            break;
        case 8:
                element.innerHTML = 'Tháng 8 có 31 ngày';
            break;
        case 9:
            element.innerHTML = 'Tháng 9 có 30 ngày';
            break;
        case 10:
            element.innerHTML = 'Tháng 10 có 31 ngày';
            break;
        case 11:
            element.innerHTML = 'Tháng 11 có 30 ngày';
            break;
        case 12:
            element.innerHTML = 'Tháng 12 có 31 ngày';
            break;
        default:
            element.innerHTML = `${month} không phải là 1 tháng, vui lòng nhập lại`;
            break;
    }
}