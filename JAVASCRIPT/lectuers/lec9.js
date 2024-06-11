//--javascript number method

// let newNumber=false;

// console.log(typeof newNumber);

// let convertNum=Number(newNumber);

// console.log(convertNum);

// console.log(typeof convertNum);

//--number method--
{
    // let num=10;

    // let stringnum=num.toString()
    
    // console.log(stringnum);
    
    // console.log(typeof stringnum);    
}

{
// let num = 123.664456;

// let num1=num.toPrecision();

// console.log(num1);

// let num2=num.toPrecision(5)

// console.log(num2);
}

// {
//     let num=45.434534

//     let num1=num.toFixed();

//     console.log(num1);

//     let num2=num.toFixed(4)

//     console.log(num2);
// }

// {
//     let num=2300000

//     let num1=num.toExponential();

//     console.log(num1);
// }

// {
//    let num=323232323;

//    let num1=num.toLocaleString()
//    let num2=num.toString()

//    console.log(num1);

//    console.log(typeof num1);
//    console.log(num2);
// }

{
    let num="10";

    console.log(number(num));

    let num1="10 10";

    console.log(number(num1));
    console.log(number.num1);

    let num2="10 items"

    let conum=number("10 items")

    console.log(number(num2));

    console.log(conum);
}

{
    let num=(15+5)+"4"

    let num1=num.valueOf();

    console.log(num1);
}

{
    let num=145;

    let num1=number.isfinite(num)

    let num2=number.issafeinteger(num)

    let num3=number.isinteger(num)

    console.log(num1);
    console.log(num2);
    console.log(num3);
}

//--javascript data()object

// 1 jan 1970

// cont 0 t0 11

const now=new Date()

console.log(now);

console.log(typeof now);

console.log(now.toDateString());

console.log(now.toISOString());

console.log(now.toJSON());

console.log(now.toLocaleTimeString());

console.log(now.toLocaleString());

let now1=now.toString()

console.log(now1);

console.log(typeof now1);

console.log(now.toLocaleTimeString());

console.log(now.toUTCString());