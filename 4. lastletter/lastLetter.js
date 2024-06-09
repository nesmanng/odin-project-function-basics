function lastLetter(string) {
    let result = string.charAt(string.length - 1);
    return result;
}

function transform(){
    let userInput = document.getElementById("userString").value;
    let result = lastLetter(userInput);
    let outputElement = document.getElementById("output");
    outputElement.innerHTML = "The result is: " + result;
}