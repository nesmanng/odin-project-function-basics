function add7(number) {
    return number + 7;
  }
  
  function calculate() {
    let userInput = document.getElementById("userNumber").value;
  
    let number = parseInt(userInput);
  
    if (isNaN(number)) {
      alert("Please enter a valid number!");
      return;
    }
  
    let result = add7(number);
  
    let outputElement = document.getElementById("output");
    outputElement.innerHTML = "The result is: " + result;
  }