let display = document.getElementById('display');
display.value = '0';

function appendToDisplay(value) {
    if (display.value === '0' && value === '0') {
        return;
    }
    if (display.value === '0' && !isNaN(value) && value !== '.') {
        display.value = value;
        return;
    }
    display.value += value;
}

function clearDisplay() {
    display.value = '0';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = '錯誤';
    }
}

