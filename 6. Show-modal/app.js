// Selector 

const showBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const closeModal = document.querySelector(".close-modal");

showBtn.addEventListener("click", function() {
    closeModal.classList.add("show-modal");
})

closeBtn.addEventListener("click", function() {
    closeModal.classList.remove("show-modal");
})