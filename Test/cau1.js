function findOppositeNumber(n , inputNumber){
    let temp = n/2;
    if(inputNumber > temp)
    {
        console.log(`${inputNumber - temp}`)
    }
    else if(inputNumber < temp){
        console.log(`${temp + inputNumber}`)
    }
    else(
        console.log(0)
    )
}
findOppositeNumber(10,5);
