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
 * デフォルト値
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
sayHello(); //こんにちはゲストさん
