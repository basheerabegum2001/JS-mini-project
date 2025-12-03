/*//change font size
const text = document.getElementById("text");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

let fontSize = 20;
increase.addEventListener("click", () => {
    fontSize +=2;
    text.style.fontSize = fontSize + "px";   
});
decrease.addEventListener("click", () => {
    fontSize -= 2;
    text.style.fontSize = fontSize + "px";
});
reset.addEventListener("click", () => {
    fontSize = 20;
    text.style.fontSize = fontSize + "px";
});

//toggleBtn
let body = document.body;
let btn = document.getElementById("toggleBtn");
btn.addEventListener("click", () => {
    body.classList.toggle("dark");
});  */

//show hide content
let btn = document.getElementById("showHideBtn");
let text = document.getElementById("infoText");
btn.addEventListener("click", () => {
    if(text.style.display === "none") {
        text.style.display = "block";
        btn.textContent = "Hide";
    } else {
        text.style.display = "none";
        btn.textContent = "Show More";
    }
});
