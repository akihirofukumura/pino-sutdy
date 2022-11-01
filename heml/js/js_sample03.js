const container = document.getElementById("container");
const box = document.getElementById("box");

console.log(container);
console.log(box);

// box.style.backgroundColor = "tomato";

container.addEventListener("mousemove",function(e){
  const x = e.clientX
  const y = e.clientY
  console.log(x,y);
  box.style.top = `${y}px`;
  box.style.left =`${x}px`;
})

