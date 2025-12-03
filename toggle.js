/*const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

body.classList.add("light");

toggleBtn.addEventListener("click", () => {
    if(body.classList.contains("light")) {
        body.classList.replace("light", "dark");
    } else {
        body.classList.replace("dark", "light");
    }
}); */

function toggleText() {
    let para = document.getElementById("text");
    if(para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}