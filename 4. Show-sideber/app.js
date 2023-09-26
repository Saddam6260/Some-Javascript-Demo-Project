// Selector

const sideMenuber = document.querySelector(".sidemenuber");
const showBtn = document.querySelector(".show-btn");
const closeBtn = document.querySelector(".close-btn");

showBtn.addEventListener("click", function(e) {
    sideMenuber.classList.toggle("show-side-menu");
    e.currentTarget.classList.toggle("toggle");
})

closeBtn.addEventListener("click", function() {
    sideMenuber.classList.remove("show-side-menu");
    showBtn.classList.remove("toggle");
})