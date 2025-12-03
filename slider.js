let images = ["IMG-20191225-WA0028.jpg", "IMG_20191230_164800.jpg", "IMG_20200212_234341.jpg"];
let index =0;

let sliderImg = document.getElementById("sliderImg");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.addEventListener("click", () => {
    index++;
    if(index === images.length) {
        index = 0;
    }
    sliderImg.src = images[index];
});
prev.addEventListener("click", () => {
    index--;
    if(index < 0) {
        index = images.length - 1;
    }
    sliderImg.src = images[index];
});