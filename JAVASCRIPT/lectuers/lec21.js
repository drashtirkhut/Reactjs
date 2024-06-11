// function as constructor // 


// function sum(){

// }

// const sum=()=>{}

// const result=new Function("a","b","return a+b")

// console.log(result(10,20));



// function.length //


// function greet(a,b,c,d){

// }
// console.log(greet.length);


// function.tostring() //


// function sum(a,b){
//     return a+b
// }
// console.log(sum.toString());


// function.name() //


// const sum=()=>{}

// console.log(sum.name());

// const name=function(){}

// console.log(name.name);


// function apply method //


// function a(b,c,d){
//     return b+c+d
// }

// let result=a.apply(null,[10,20,30])

// console.log(a(10,10));
// console.log(result);

// const max=Math.max.apply(null,[144,76,54,32])

// console.log(max);

// const min=Math.min.apply(null,[144,76,54,32])

// console.log(min);


// apply arguments with loop //


// let num=[20,30]

// function sum(){
//     let sum=0
//     for(let i=0; i<arguments.length; i++){
//         sum+=arguments[i]
//     }
//     return sum
// }
// let result=sum.apply(null,num)

// console.log(result);


// array method //


// let num1=[5,10,15,20]

// let num2=[25,30,35,40]

// console.log(num1.concat(num2));

// let result=num1.push.apply(num1,num2)

// console.log(result);

// console.log(num1);

// let result1=num1.push(...num2)

// console.log(result1);

// console.log(num1);