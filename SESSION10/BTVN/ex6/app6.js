function caculate(x1, y1, x2, y2){
    x = Math.sqrt((x1 - x2)^2 +(y1 - y2)^2)
}
const d = caculate(3, 10, 0, 6);
if (x !== 5) {
 console.log('Failed: the calculation is wrong');
} 
else {
 console.log('Passed, bravo')
};