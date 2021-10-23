/**
 * 1.変数
 */
//従来はvar変数(上書き可能、再宣言可)
//let変数は（上書き可、再宣言不可）
//const変数は（上書き不可、再宣言不可　ただし、オブジェクトの変更は可能）
const val = {
  name: "kenta",
  age: 30
};
val.name = "ogata";
console.log(val);

/**
 * 2.テンプレート文字列
 */
const val2 = {
  name: "kenta",
  age: 32
};
const mes = `I am ${val2.name}. ${val2.age}years old.`;
console.log(mes);

/**
 * 3.アロー関数
 */
//従来の関数の書き方1
function func1(str) {
  return str;
}
//従来の関数の書き方2
const func2 = function (str) {
  return str;
};

//アロー関数
const func3 = (str) => {
  return str;
};
//内部式が一行の場合は{}は省略可能
const func4 = (num1, num2) => num1 + num2;

/**
 * 4.分割代入
 */
const myProfile = {
  like: "football",
  name: "kenta",
  age: 30
};
//const mes1 = `名前は${myProfile.name}です.${myProfile.age}歳です`;
//↑だとコードが長い。。
const { name, age } = myProfile;
const mes2 = `名前は${name}です.${age}歳です`;
console.log(mes2);

const myProfile2 = ["football", "kenta", 30];
const [like2, name2, age2] = myProfile2;
const mes3 = `名前は${name2}です.${age2}歳です`;
console.log(mes3);

/**
 * 5.デフォルト値
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
sayHello(); //こんにちはゲストさん

/**
 * 6.スプレッド構文...
 */
//配列の展開
const arr1 = [1, 2];
console.log(...arr1); //1 2

const sum = (num1, num2) => console.log(num1 + num2);
console.log(sum(...arr1)); //3

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1); //1
console.log(num2); //2
console.log(arr3); //[3,4,5]

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6); //[10,20]

const arr7 = [...arr4, ...arr5];
console.log(arr7); //[10,20,30,40]

//コピーの問題点
//参照渡しのため、コピー元の値も変わってしまう
const arr8 = arr4;
console.log(arr8); //[10,20]
arr8[0] = 100;
console.log(arr4); //[100,20]

/**
 * 7.mapやフィルターの処理
 */
//for文で書くと
const nameArr = ["田中", "田村", "山田"];
for (let i = 0; i < nameArr.length; i++) {
  console.log(nameArr[i]);
}
//map変数なら
nameArr.map((name) => console.log(name));

//map変数は第二引数にインデックスを取ることもできる
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

const numArr = [1, 2, 3, 4, 5];
numArr.filter((num) => console.log(num % 2 === 0));
