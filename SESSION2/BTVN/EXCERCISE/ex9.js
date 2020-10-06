// ex9

let a1 = Number(prompt("Hệ pt 2 ẩn - dòng 1 - a: "));
let b1 = Number(prompt("Hệ pt 2 ẩn - dòng 1 - b: "));
let c1 = Number(prompt("Hệ pt 2 ẩn - dòng 1 - c: "));
let a2 = Number(prompt("Hệ pt 2 ẩn - dòng 2 - a: "));
let b2 = Number(prompt("Hệ pt 2 ẩn - dòng 2 - b: "));
let c2 = Number(prompt("Hệ pt 2 ẩn - dòng 2 - c: "));

let x,y;

x = (c2 - ((b2*c1)/b1))/(a2 - (b2*a1)/b1);
y = (c1 - a1*x)/b1;
console.log(`X = ${x}`);
console.log(`Y = ${y}`);