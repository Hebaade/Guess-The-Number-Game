const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");
input.focus();

let randomNum = Math.floor(Math.random() * 100);
chance = 10;
checkButton.addEventListener("click", () => {
  chance--;
  let inputValue = input.value;
  if (inputValue == randomNum) {
    [guess.innerHTML, input.disabled] = ["Congratulations", true];
    [checkButton.innerHTML, guess.style.color] = ["Replay", "#333"];
  } else if (inputValue > randomNum && inputValue < 100) {
    [guess.innerHTML, remainChances.innerHTML,inputValue] = ["Your guess is high", chance,""];
    guess.style.color = "#333";
  } else if (inputValue < randomNum && inputValue > 0) {
    [guess.innerHTML, remainChances.innerHTML,inputValue] = ["Your guess is low", chance,""];
    guess.style.color = "#333";
  } else {
    [guess.innerHTML, remainChances.innerHTML,inputValue] = ["Your number is invalid", chance,""];
    guess.style.color = "#DE0611";
  }
  if (chance == 0) {
    [checkButton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
    [guess.textContent, guess.style.color] = ["You lost the game", "#DE0611"];
  }
  if (chance < 0) {
    window.location.reload();
  }
});
//console.log(randomNum)