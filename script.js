let screen = document.getElementById("display");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    //console.log("Button text is ", buttonText);
    if (buttonText == "=" && screenValue == "") {
      screenValue += "Press Any Keys";
      screen.value = screenValue;
    }

    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "AC") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else if (buttonText == "Del") {
      let res = screenValue.toString();
      screenValue = res.slice(0, res.length - 1);
      screen.value = screenValue;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
