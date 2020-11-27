let s1 = prompt("Enter s1");
let s2 = prompt("Enter s2");

let arrs1 = s1.split("");
let arrs2 = s2.split("");

let tempArr = [];
let max;
let min;
if(arrs1.length > arrs2.length)
{
    for(let i = arrs2.length; i < arrs1.length; i++)
    {
        tempArr.push(arrs1[i]);
    }
    max = arrs1.length;
    min = arrs2.length;
}
else{

    for(let i = arrs1.length; i < arrs2.length; i++)
    {
        tempArr.push(arrs2[i]);
    }
    max = arrs2.length;
    min = arrs1.length;
}


let renderArr = [];
for(let i = 0; i < min ; i++)
{
    renderArr.push(arrs1[i]);
    renderArr.push(arrs2[i]);

}
for(let i = 0; i < tempArr.length; i++)
{
    renderArr.push(tempArr[i]);

}
console.log(renderArr);
let str = "";
for(let i = 0; i < renderArr.length; i++)
{
    str += renderArr[i];
}
console.log(str);

