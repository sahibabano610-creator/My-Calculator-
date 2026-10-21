function showNumber(num) {
    document.getElementById("display").value += num;
}

function calculate() {
    let display = document.getElementById("display");

    try {
        display.value = Function(
            '"use strict"; return (' + display.value + ')'
        )();
    } catch {
        display.value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
