function capitalize(string) {
    let result = "";
    for (let i = 0; i < string.length; i++){
        if (i === 0) {
            result += string.charAt(i).toUpperCase();
        } else {
            result += string.charAt(i).toLowerCase();
        }
    }
    return result;
}

function transform() {
    let userInput = document.getElementById("userString").value;
    let result = capitalize(userInput);
    let outputElement = document.getElementById("output");
    outputElement.innerHTML = "The result is: " + result;
}