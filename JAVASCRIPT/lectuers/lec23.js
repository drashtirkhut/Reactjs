// -- asyncronous fuction -- //

// setTimeout

// function greet(a,b){
//     console.log(a+b);
//     return a+b;
// }

// setTimeout(greet,4000,10,20)

// // -- setinterval

// function greet(a,b){
//     console.log(a+b);
//     return a+b;
// }

// setInterval(greet,4000,10,20)

// clearTimeout , clearInterval

// let setTimeid=setTimeout(function(){
//     console.log("hi")
// },5000)

// console.log(setTimeid);

//--clearinterval--//

// let count=0;

// let setintervalid=setInterval(function(){
//     count+=1;

//     if(count==10){
//         clearInterval(setintervalid)
//     }
//     console.log(count);
// },1000)

//-- this keyword in javascript --//

// -- this in global scope -- //

// let Name=this

// console.log(Name);

// -- this in inner function -- //

// function greet(){
//     console.log(this);
// }
// greet()

// -- this in inner object -- //

// const profile={
//     firstname:"a",
//     age:22,

//     greet(){
//         console.log(this);
//         console.log(this.age);
//     }
// }

// profile.greet()

// -- this keyword in inner function -- //
// {
// const user={
//     firstname:"a",
//     lastname:"b",
//     age:22,

//        greet(){
//          console.log(this);
//          console.log(this.lastname);

//            function innerfuc(){
//             console.log(this);
//             console.log(this.age);
//            }
//            innerfuc
//        }
// }
// user.greet()
// }


// -- this with arrow function -- //

// let greet=()=>console.log(this);

// greet()

// const user={
//     firstname:"a",
//     lastname:"b",
//     age:23,

//     greet(){
//         console.log(this);
//         console.log(this.firstname);

//          const innerfun=()=>{
//             console.log(this);
//             console.log(this.age);
//          }
//          innerfun()
//     }
// }
// user.greet()

// javascript JSON()

// fetch() method

