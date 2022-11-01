const age = document.getElementById("age");
const txt = document.getElementById("txt");
document.getElementById("btn").addEventListener("click",function(){
  const num = Number(age.value);
  if (num < 0 || num >= 130){
    txt.innerText = "そんな年齢はありません"
  }
  else if( num >= 100 ){
    //#textの文字を長生きですね。に
    txt.innerText = "長生きですね"
  }
  else if(num >= 21 && num <= 99){
    txt.innerText = "大人ですね"
  }

  else if(num == 20){
    txt.innerText = "成人ですね"
  }

  else if (num >=0 && num <= 6){
    txt.innerText = "子供ですね"
  }

  else if (num >=7 && num <= 12){
    txt.innerText = "小学生ですね"
  }

  else if (num >=13 && num <= 18){
    txt.innerText = "中高生ですね"
  }
  

  else{
    console.log("条件が違う")
  }
})


/*

0 - 6 子供ですね
7 - 12 小学生ですね
13 - 18 中高生ですね
20 成人していますね
21 - 99 大人ですね
100 - 長生きですね
0より小さい もしくは 130以上

1. #ageに年齢入力
2. #btnをクリック
3. [#ageのvalueを比べる]
  1. もし 0以上の時 かつ 6以下の時
  |
  2. もし 20と同じ時
  3. もし 100以上の時
  if(条件){
    条件が真（合う）の場合ここが動く
  }
*/
