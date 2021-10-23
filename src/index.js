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
