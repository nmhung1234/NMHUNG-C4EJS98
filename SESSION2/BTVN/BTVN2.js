    // caculator BMI
    let centimeterHeight = Number(prompt("Your height (cm): "));
    let meterHeight = Number(centimeterHeight / 100);
    let weight = Number(prompt("Your weight: "));
    let BMI = (weight / (meterHeight*meterHeight)).toFixed(1);
    console.log("Your BMI: ", BMI);
    if(BMI < 16)
    {
        console.log("You are Severely!");
    }
    else if (16 <= BMI || BMI < 18.5 )
    {
        console.log("You are Underweight!");
    }
    else if (18.5 <= BMI || BMI < 25 )
    {
        console.log("You are Nomal!");
    }
    else if (25 <= BMI || BMI < 30 )
    {
        console.log("You are Overweight!");
    }
    else
    {
        console.log("You are Obese!");
    }


//caculator facotial of n
let n = Number(prompt("Enter your number: "));
let s = 1;
for(let i = 1; i <= n; i++)
{
    s = s*i;
}
console.log(s);