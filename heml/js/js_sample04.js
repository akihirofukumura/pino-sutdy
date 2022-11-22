// const button = document.getElementsByClassName("btn");

// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener("click", function (evt) {
//     console.dir(evt.target.dataset.color);
//     // changeBg(button[i].innerText);
//     changeBg(evt.target.dataset.color);
//   });
// }
// function changeBg(value) {
//   document.body.style.backgroundColor = value;
//   // console.log("動きました");
//   // console.log(value);
// }
const btn = document.querySelectorAll(".btn");
console.log(btn.length);
for (let i = 0; i < btn.length; i++) {
  console.log(btn[i]);
  btn[i].addEventListener("click", function (evt) {
    console.log("aa");
    btn[i].innerText = i + 1;
  });
}
