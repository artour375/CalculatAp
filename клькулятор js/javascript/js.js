let a = ''; //first number
let b = ''; //second number
let sign = ''; // знак операции
let finich = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

// экран
const out = document.querySelector('.calc-screen p');

//функция очистки AC
function clearALL() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

//находим по селектору кнопку ac и применяем ей функцию
document.querySelector('.ac').onclick = clearALL;

//проверяем какая кнопка нажата и кнопка ли это

document.querySelector('.buttons').onclick = (event) => {
    //нажата кнопка
    if(!event.target.classList.contains('btn')) {
        return;
    // если нажата кнопка очистить -AC ТО ПРОСТО ВЫХОДИМ
    } else if (event.target.classList.contains('ac')) {
        return;
    } else {
        out.textContent = '';
        // получаем нажатую кнопку
    }
    const key = event.target.textContent;
    //нажата 0-9 проверка или точка
    if (digit.includes(key)) {
       if (b === '' && sign === '') {
        a += key;
        console.table(a, b, sign);
        out.textContent = a;
       } else if (a !== '' && b != '' && finich) {
        b = key;
        finich = false;
        out.textContent = b;
       }
       else {
        b += key;
        out.textContent = b;
       }
       console.table(a, b, sign);
       return;
    }
    // если нажата клавиша плюс минус или умножить
    else if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return;
        
    }

    // нажата кнопка равно
    if (key === '=') {
        if (b === '') b = a;
        switch(sign) {
            case "+":   
                    a = (+a) + (+b);
                    break;
                case "-":   
                    a = a - b;
                    break;
                case "X":   
                    a = a * b;
                    break;
                case '/':
                    if (b === '0') {
                        out.textContent = 'Ошибка!';
                        a = '';
                        b = '';
                        sign = '';
                        return;
                    }
                    a = a / b;
                    break;
        }
        finich = true;
        out.textContent = a;
        console.table(a, b, sign);
    }
}
