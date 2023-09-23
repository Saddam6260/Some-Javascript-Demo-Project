const colors = ["#bc6c25", "#ffafcc", "#588157", "#2a9d8f", "#780000"];

const randomBtn = document.querySelector(".random-color");
const colorCode = document.querySelector(".color-code");
const heading = document.querySelector(".heading");
const colorCard = document.querySelector(".colorCard");
console.log(heading);
console.log(colorCard);

randomBtn.addEventListener("click", function() {

    let randomNumber = Math.floor(Math.random() * colors.length);

    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    colorCode.textContent = colors[randomNumber];
    heading.style.color = colors[randomNumber];
})