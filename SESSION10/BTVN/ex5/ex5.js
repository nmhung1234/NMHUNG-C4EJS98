
function randomNumber(a,b){
    let arr = [];
    for(let i = a; i <= b; i++)
    {
        arr.push(i);
    }
    let ran = Math.floor(Math.round()* arr.length);
    let x  = arr[ran];
}
const x = randomNumber(4, 16);
if (x < 4) {
 console.log('Failed: the number is smaller than 4');
} else if (x > 16) {
 console.log('Failed: the number is bigger than 16');
} else {
 console.log('Passed, bravo');
}