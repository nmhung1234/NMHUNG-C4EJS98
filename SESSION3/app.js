let capacityUser = Number(prompt("Enter your length: "));
let array1 = new Array();

let arraychan = new Array();
let arrayle = new Array();
for(let i = 0; i < capacityUser; i++)
{
    array1[i] = Number(prompt("Nhập số : "));
}

for(let i = 0; i < array1.length - 1; i++)
{
    for(let j = i + 1; j < array1.length; j++)
    {
        if(array1[i] > array1[j])
        {
            let temp = array1[i];
            array1[i] = array1[j];
            array1[j] = temp;
        }
    }
}
console.log("Dãy sau khi đã sắp xếp: ");
console.log(array1);
let x = 0;
for(let i = 0; i < array1.length; i++)
{
    if(array1[i] % 2 == 0)
    {
        x = array1[i];
        arraychan.push(x);
    }
    else
    {
        x = array1[i];
        arrayle.push(x); 
    }
    x = 0;
    
}
console.log("Dãy sau khi chia: ");
console.log(arrayle);
console.log(arraychan);

for(let i = 0; i < arraychan.length; i++)
{
    if(arraychan[i] == arraychan[i+1])
    {
        arraychan.splice(i,1);
    }
}
for(let i = 0; i < arrayle.length; i++)
{
    if(arrayle[i] == arrayle[i+1])
    {
        arrayle.splice(i,1);
    }
}
console.log("Dãy sau khi loại bỏ phần tử trùng nhau: ");

console.log(arrayle);
console.log(arraychan);




