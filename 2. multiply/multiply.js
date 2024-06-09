function multiply(num1, num2) {
    return num1 * num2;
}

function calculate() {
    let userInput1 = document.getElementById("userNum1").value;
    let userInput2 = document.getElementById("userNum2").value;

    let num1 = parseInt(userInput1);
    let num2 = parseInt(userInput2);

    if (isNaN(num1) && isNaN(num2)) {
        alert("Please enter valid numbers!");
    } else if (isNaN(num1)) {
        alert("Please enter a valid number for the first input!");
    } else if (isNaN(num2)) {
        alert("Please enter a valid number for the second input!");
    }

    let result = multiply(num1, num2);

    let outputElement = document.getElementById("output");
    outputElement.innerHTML = "The result is: " + result;
}