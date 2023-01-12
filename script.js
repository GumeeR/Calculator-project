const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "c") {
      display.textContent = "";
    } else if (button.textContent === " o ") {
      let string = display.textContent.toString();
      display.textContent = string.substr(0, string.length - 1);
    } else if (display.textContent !== "" && button.textContent === " = ") {
      display.textContent = eval(display.textContent);
    } else if (display.textContent === "" && button.textContent === " = ") {
      display.textContent = "Null";
      setTimeout(() => (display.textContent = ""), 2000);
    } else {
      display.textContent += button.textContent;
    }
  });
});