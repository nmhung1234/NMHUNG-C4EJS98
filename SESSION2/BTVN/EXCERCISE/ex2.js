//ex 2:
let userInput2 = Number(prompt("Nhập số n: "));
let count = 0;
for(let i = 1; i <= userInput2; i++)
{
    if (userInput2 % i == 0)
    {
        count ++;
    }
}
if(count == 2)
    console.log("True");   
else
    console.log("False");