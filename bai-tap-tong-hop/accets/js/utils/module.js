export default function getE (idClass, range = false) {
    if (range === false) {
        return document.querySelector (idClass);
    } else {
        return document.querySelectorAll (idClass);
    }
}
/**
 * 
 * @param {tên local} name 
 * @returns local dạng array[obj]
 */
export function getLocal (name) {
    let local = JSON.parse (localStorage.getItem (name));

    if (local == null) {
        local = [];
    }

    return local;
}


/**
 * 
 * @param {tên local} name 
 * @param {data cần append} data 
 */
export function updateLocal (name, data) {
    let local = getLocal (name);
    local.push (data);

    localStorage.setItem (name, JSON.stringify (local));
}



/**
 * 
 * @param {dat to for mat} dates 
 * @returns dd/mm/yyyy
 */
export function formatDate (dates) {
    let date = new Date (dates);
    let day = date.getDate ().toString ().padStart (2, 0);
    let month = date.getMonth ().toString ().padStart (2, 0);
    let year = date.getFullYear ();
    return `${day}/${month}/${year}`;
}