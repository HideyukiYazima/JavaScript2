let name = "hideyuki";

console.log("name");

name = "yajima";

console.log("name");

let number = 2;
// 2

number = number + 3;
// 5

console.log(number);

let number = 7;
console.log(number);

// +3する
number = number + 3;

console.log(number);

// 割る2する
number /= 2;

console.log(number);

// let 値を更新することが可能(変数)
// const 値を更新しようとするとエラーする(定数)

const language = "矢嶋";

console.log(language);

console.log(language + "という名前です");


const level = 12;

if (level > 10) {
  console.log("レベルが10より大きいです");
}

//
const password = "矢嶋";

if (password === "矢嶋") {
  console.log("ログインに成功しました");
}

if (password !== "矢嶋") {
  console.log("パスワードが間違っています");
}

//
const number = 19;

if (number >= 20) {
  console.log("20以上です");
}

else {
  console.log("20以下です");
}

// else if
const number = 19;

if (number >= 20) {
  console.log("私の番号は20以上です");
}

else if (number >= 10) {
  console.log("私の番号は20以下ですが、10以上です");
}

else {
  console.log("私の番号は10未満です");
}

// 〇以上かつ〇未満
const number = 23;
if (number >= 20 && number < 30) {
  console.log("私の番号は20番代です");
}

// swith文
const n = 2;

switch (n) {
  case 1:
    console.log("大当たりです");
    break;

  case 2:
    console.log("当たりです");
    break;  

  case 3:
    console.log("ハズレです");
    break;

  default:
    console.log("大ハズレです");
  break;
}

// while文
let number = 1;

while (number <= 100) {
  console.log(number);
  number += 1; 
}

// for文
for(let number = 1; number <= 100; number += 1) {
  console.log(number);
}

// for文　if文 
for (let number = 1; number <= 100; number ++) {
  
  if (number % 3 === 0) {
    console.log("3の倍数です");
  }
  else {
    console.log(number);
  }
}


// 配列要素
const animals = ["dog", "cat", "sheep"];

console.log(animals[0]);

console.log(animals[2]);

// 配列要素更新
animals[3] = "rabbit";

console.log(animals[3]);

// for文で短縮
for (let i = 0; i < 3; i++) {
  console.log(animals[i]);
}
