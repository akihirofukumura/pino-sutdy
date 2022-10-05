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

const output = document.getElementById("output");
const text = document.getElementById("text");


const hour = new Date().getHours();
document.getElementById("btn").onclick = () => {
  console.log("cliclした")
  console.log(document.getElementById("text").value);
  if(hour>=4&&hour<11){
    document.getElementById("greeting").textContent = "おはよう";
  }
  else if(hour>=11&&hour<17){
    document.getElementById("greeting").textContent = "こんにちは";
  }
  else{
    document.getElementById("greeting").textContent = "こんばんわ";
  }
  console.log(output.innerText = text.value + "さん"
  )
}

