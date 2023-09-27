// Selector 

const toggleBtn = document.querySelector(".toggle-btn");
const showNav = document.querySelector(".nav");

toggleBtn.addEventListener("click", function(e) {
    showNav.classList.toggle("show-nav");
})