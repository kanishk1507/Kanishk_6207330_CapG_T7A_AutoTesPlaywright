let count = 0;

let display = document.getElementById("count");
let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let resetBtn = document.getElementById("reset");

plusBtn.addEventListener("click", function () {
    count++;
    display.textContent = count;
});

minusBtn.addEventListener("click", function () {
    count--;
    display.textContent = count;
});


resetBtn.addEventListener("click", function () {
    count = 0;
    display.textContent = count;
});