function clicks (character) {
    switch (character) {
        case '1':
            writeCaculation ('1');
            break;
        case '2':
            writeCaculation ('2');
            break;
        case '3':
            writeCaculation ('3');
            break;
        case '4':
            writeCaculation ('4');
            break;
        case '5':
            writeCaculation ('5');
            break;
        case '6':
            writeCaculation ('6');
            break;
        case '7':
            writeCaculation ('7');
            break;
        case '8':
            writeCaculation ('8');
            break;
        case '9':
            writeCaculation ('9');
            break;
        case '0':
            writeCaculation ('0');
            break;
        case '+':
            writeCaculation ('+');
            break;
        case '-':
            writeCaculation ('-');
            break;
        case '×':
            writeCaculation ('×');
            break;
        case '/':
            writeCaculation ('/');
            break;
        case 'AC':
            allCancel ();
            break;
        case '(':
            writeCaculation ('(');
            break;
        case ')':
            writeCaculation (')');
            break;
        case '.':
            writeCaculation ('.');
            break;
        case '=':
            caculationResult ();
            break;
        case 'C':
            cancel ();
            break;
        default:
            break;
    }
}

function writeCaculation (character) {
    let element = document.getElementById ('caculation');
    element.innerHTML += character;

}
function cancel () {
    let element = document.getElementById ('caculation');
    element.innerHTML = element.textContent.slice (0, -1);
}
function allCancel () {
    let element = document.getElementById ('caculation');
    element.innerHTML = '';
}
function caculationResult () {
    let caculationElement = document.getElementById ('caculation')
    let caculation = caculationElement.textContent;
    let resultElement = document.getElementById ('result');
    caculation = caculation.replaceAll ('×', '*');
    try {
        let result = eval (caculation);
        resultElement.innerHTML = result;
    } catch (err) {
        if (err instanceof SyntaxError) {
            alert ('Phép tính không hợp lệ!');
        } else {
            alert ('Phép tính không hợp lệ');
        }
    }
}