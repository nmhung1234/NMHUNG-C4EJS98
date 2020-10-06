// ex 1
let input1 = parseInt(prompt("Enter N:"));
let countchan = 0, countle = 0;
for(let i = 1; i <= input1; i++)
{
    if((i % 2) == 0)
        countchan ++;
    else
        countle ++;
}
console.log(`Tổng số chẵn từ 1 - ${input1} là: `, countchan);
console.log(`Tổng số lẻ từ 1 - ${input1} là: `, countle);