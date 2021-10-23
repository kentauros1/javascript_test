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
