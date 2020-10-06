
// ex5
let loop = true;
let sum5 = 0;
while (loop)
{
    let input5 = Number(prompt("Nhập số ngẫu nhiên: "));
    if(input5 >= 0)
    sum5 += input5;
    else
    loop = false;
}
console.log(sum5);