
//1. Check if a number is positive, negative, or zero

let num=9;

if(num>0)
{
    console.log("poasitiv");
}
else if(num==0)
{
    console.log("num is 0");
}
else{
    console.log("negative");
}

//2. Check if a person is eligible to vote

let age=25;

if(age>=18){
    console.log("eligible for vote");
}
else
{
    console.log("not eligible for vote");
}

//3. Determine the largest of three numbers

let d=10;
let e=11;
let f=2;

if(d>e&&d>f)
{
    console.log("d is largest");
}
else if(e>f)
{
    console.log("e is largest");
}
else{
    console.log("f is largest");
}


//4. Check if a year is a leap year

let year=2024;

if(year%4==0)
{
    console.log("leap year");
}
else{
    console.log("not leap year");
}


//5. Determine the grade based on a score

let marks=54;

if(marks>=90)
{
    console.log("grade a");
}
else if(marks>=80)
{
    console.log("grade b");
}
else if(marks>=70)
{
    console.log("grade c");
}
else if(marks>=60)
{
    console.log("grade e");
}
else
{
    console.log("grade f");
}