console.log("JS FILE LOADED SUCCESSFULLY");

let timer = null;
let totalSeconds = 0;

function parseInput(id) {
  // use Number and handle NaN
  const val = Number(document.getElementById(id).value);
  return isNaN(val) ? 0 : Math.max(0, Math.floor(val)); // ensure non-negative integer
}

function startTimer() {
    const h = parseInput("hours");
    const m = parseInput("minutes");
    const s = parseInput("seconds");

    totalSeconds = h * 3600 + m * 60 + s;

    if (totalSeconds <= 0) {
        alert("Enter a time greater than 0!");
        return;
    }

    if (timer) clearInterval(timer);

    updateDisplay(totalSeconds);

    timer = setInterval(() => {
        totalSeconds--;
        if (totalSeconds <= 0) {
            clearInterval(timer);
            timer = null;
            document.getElementById("display").innerText = "Time's Up!";
            return;
        }
        updateDisplay(totalSeconds);
    }, 1000);
}
function pauseTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function resetTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  totalSeconds = 0;
  document.getElementById("display").innerText = "00:00:00";
  // optionally clear inputs:
  // document.getElementById("hours").value = "";
  // document.getElementById("minutes").value = "";
  // document.getElementById("seconds").value = "";
}

function updateDisplay(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  document.getElementById("display").innerText =
    `${format(hrs)}:${format(mins)}:${format(secs)}`;
}

function format(num) {
  return num < 10 ? "0" + num : String(num);
}