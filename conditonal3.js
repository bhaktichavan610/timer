var age=22;
var marks=75;
if(age>28)
{
    console.log("not eligible");
}
else if(age>=18&&age<=28)
{
    if(marks>=70)
    {
        console.log("eligible");
    }
    else{
        console.log("marks too low");
    }
}
else if(age<18)
{
    console.log("too younge");
}