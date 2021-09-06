var button = document.querySelectorAll(".button");
var input = document.getElementById("displayTextboxId");
var display = document.getElementById("display");
var square = document.getElementById("square");
var sqrtButton = document.getElementById("sqrtButton");

var value = "";
button.forEach((e) => {
  e.addEventListener("click", (x) => {
    data = x.target.innerText;
    // if(data == "^"){
    //   square.innerText = "**";
    // }
    value += data;
    // var previousInput = input.value;
    // input.value = previousInput + data;
    input.value = value;

    if (data == "=") {
      try {
        value = value.slice(0, -1);
        input.value = value;
        if (value.indexOf("^")) {
          value = value.replace("^", "**");
          console.log(value);
        }

        display.style.color = "blue";
        display.innerText = eval(value.trim());
      } catch {
        display.style.color = "Red";
        display.innerText = "Invalid Input!!";
      }
    } else if (data == "C") {
      value = value.slice(0, -1);
      input.value = value;
      display.innerText = "";
      input.value = "";
      value = "";
    } else if (data == "⌫") {
      value = value.slice(0, -2);
      input.value = value;
    } else if (data == "%") {
      value = value.slice(0, -1);
      display.innerText = value / 100;
    } else if (data == "√") {
      value = value.slice(0, -1);
      display.innerText = Math.sqrt(value);
    }
    // console.log(value);
  });
});
