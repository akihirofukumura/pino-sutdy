//コンソールで文字
console.log("hrllo");

//デーだが変わる 変わる 数値 -> 変数
//変数  変わる  let 変数名
//定数  決まってる const 変数名
// = は代入と同じ
let name = "福村"
console.log(name);

name = "薛";
console.log(name);
// console.log("こんにちは"+ name +"さん");
console.log(`こんにちは${name}さん`);

console.log(document.getElementById("btn"));

// const output = document.getElementById("output");
const text = document.getElementById("text");
const content = document.getElementById("output")
let contentText = content.textContent

const hour = new Date().getHours();
document.getElementById("btn").onclick = () => {
  console.log("cliclした")
  console.log(document.getElementById("text").value);
  if (hour >= 4 && hour < 11) {
    document.getElementById("output").innerHTML = `おはよう、${text.value}さん`;
  } else if (hour >= 11 && hour < 17) {
    document.getElementById("output").innerHTML = `こんにちは、${text.value}さん`;
  } else {
    document.getElementById("output").innerHTML = "こんばんわ<li>" + text.value + "</li>さん";
  }
}
document.getElementById("clear").onclick = () => {
  document.getElementById("text").value="";
  document.getElementById("output").textContent="";
}



// const someVar = "変数です"
// const test = `あ、${someVar}`
// console.log(test);