let x = 2 + 3 + "5";
console.log("Value of expression '2 + 3 + '5' is: ", x); //55
let y = 5 + 2 + 3;
console.log("Value of expression 5 + 2 + 3 is: ", y); //10
// let x = BigInt("123456789012345678901234567890");
let z = 16 + 4 + "Volvo"; // 20Volvo
let t = "Volvo" + 16 + 4; // Volvo164

console.log("false == 0: ", false == 0); //true
console.log("false == '': ", false == ""); //true
console.log("false == undefined: ", false == undefined); //false
console.log("false == null: ", false == null); //false
console.log("false == NaN: ", false == NaN); //false
console.log("false == {}: ", false == {}); //false
console.log("false == []: ", false == []); //true
console.log("false == '': ", false == ""); //true

// Lưu ý rằng các chuỗi được so sánh theo thứ tự bảng chữ cái:
let text1 = "AC";
let text2 = "B";
let result = text1 < text2;
console.log("text1 < text2: ", result); //true

let a = 5;
let b = ++a;
console.log("a sau ++a:", a); // 6
console.log("b = ++a:", b); // 6

let c = 5;
let d = c++;
console.log("c sau c++:", c); // 6
console.log("d = c++:", d); // 5

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// console.log("part = text.slice(7, 13):", part); //Banana

let text = "Apple, Banana, Kiwi";
let part = text.slice(7);
console.log("part = text.slice(7):", part); //Banana, Kiwi


let part3 = text.substr(7, 6);
console.log("part3 = text.substr(7, 6):", part3); //Banana

let str = "Apple, Banana, Kiwi";
let part2 = str.substring(7, 13);
console.log("part2 = str.substring(7, 13):", part2); //Banana

// for (let i = 1; i <= 4; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1);
//   }

// var as = ['dog', 'cat', 'hen'];
// as[100] = 'fox';
// console.log(as.length);

// sum(10, 20);
// diff(10, 20);
// function sum(x, y) {
//   return x + y;
// }

// let diff = function (x, y) {
//   return x - y;
// };

console.log([] == []);
