const redBoxHandler = document.querySelector(".red");
const yellowBoxHandler = document.querySelector(".yellow");
const greenBoxHandler = document.querySelector(".green");
const signHandler = document.querySelector(".sign");

function assignSignText(signText) {
  signHandler.innerHTML = signText;
}

function run() {
  redBoxHandler.classList.add("red-active");
  yellowBoxHandler.classList.remove("yellow-active");
  greenBoxHandler.classList.remove("green-active");
  assignSignText("✋");
  setTimeout(() => {
    redBoxHandler.classList.remove("red-active");
    yellowBoxHandler.classList.add("yellow-active");
    assignSignText("👍");
    setTimeout(() => {
      yellowBoxHandler.classList.remove("yellow-active");
      greenBoxHandler.classList.add("green-active");
      assignSignText("🚀");
    }, 1000);
  }, 2000);
}

function handleResetClick() {
  run();
}

run();
