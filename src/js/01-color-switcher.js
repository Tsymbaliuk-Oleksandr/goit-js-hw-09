const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let timerId = null;
stopBtn.disabled = true;

startBtn.addEventListener("click", onBtnStartClick);
stopBtn.addEventListener("click", onBtnStopClick);

function onBtnStartClick() {
  timerId = setInterval(getRundomBackroundColor, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRundomBackroundColor(){
  document.body.style.backgroundColor = getRandomHexColor();
}

function onBtnStopClick() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};