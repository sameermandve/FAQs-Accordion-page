let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let ans = document.querySelectorAll(".ans");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].classList.toggle("hidden");
    minus[i].classList.toggle("hidden");
    ans[i].classList.toggle("hidden");
  });
}

for (let i = 0; i < plus.length; i++) {
  minus[i].addEventListener("click", function () {
    plus[i].classList.toggle("hidden");
    minus[i].classList.toggle("hidden");
    ans[i].classList.toggle("hidden");
  });
}
