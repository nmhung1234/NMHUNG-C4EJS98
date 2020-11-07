function randomNumber(){
    let numberR = Math.floor(Math.random()*10);
    return numberR
}
const x = randomNumber();
if (x < 0){
    console.log(`Failed: the number is smaller than 0`);
}
else if (x > 10){
    console.log(`Failed: the number is bigger than 0`);
}
else {
    console.log(`Passed, bravo`);
}
