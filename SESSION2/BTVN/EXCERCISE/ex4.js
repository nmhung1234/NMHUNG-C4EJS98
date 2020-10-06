//ex4 dãy fibonacci
sum  = 0;
let a = 1, b = 0, temp;
while(userInput > 0)
{
    temp = a;
    a = a + b;
    b = temp;
    userInput --;
}
console.log(b);