const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

console.log(btns);
let count = 0;

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        let styles = e.currentTarget.classList;

        console.log(styles);
        if(styles.contains("decrease")) {
            count--;
        }else if(styles.contains("increase")) {
            count++;
        }else{
            count = 0;
        }

        value.textContent = count;

        if(count > 0) {
            value.style.color = "green"
        }
        if(count < 0) {
            value.style.color = "red"
        }
        if(count === 0) {
            value.style.color = "black";
        }
    })
})