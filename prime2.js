var num=11;
var isPrime=true;
if(num<=1)
{
    isPrime=false;
}
else
{
    for(var i=2;i<=Math.sqrt(num);i++)
    {
        if(num%i==0)
        {
            isPrime=false;
            break;
        }
    }
}
if (isPrime) {
    console.log(`${num} is prime`);
} else {
    console.log(`${num} is not prime`);
}
console.log(isPrime);
console.log(Math.sqrt(16));
