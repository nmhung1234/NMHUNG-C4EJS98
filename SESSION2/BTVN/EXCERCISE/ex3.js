// ex3
// in ra số nguyên tố
let userInput3 = Number(prompt("Nhập số n: "));
let count = 0;
for(let i = 2; i <= userInput3; i++)
{
    for(let j = 1; j <= i; j++ )
    {
        if (i % j == 0)
        {
            count ++;
        }
    }
    if(count == 2)
    {
        console.log(i);
        
    }
    count = 0;  
}