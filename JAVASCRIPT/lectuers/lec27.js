// javascript promises

// dinner scenario                                                                   javascript

// 1.your friends                                                                    1. promises

// 2.while your friend is on his way to the food truck(fetch)                        2. Asyncronous operation in javascript

// 3.when your friend text's you with ' can get the food and food or Not             3. promises return value

// 4.can get food                                                                    4.promises is said to be fulfilled

// 5.cannot the food                                                                 5.promises is said to be rejected

// 6.setup the table                                                                 6.success callback



// 1.your friend                                                                     1.promises

// 2.can get food/cannot get food                                                    2.promises value

// 3.can get food                                                                    3.fulfill promises

// 4.cannot get food                                                                 4.reject promises

// 5.set up the table                                                                5.success cancelIdleCallback

// 6.cook another food                                                               6.failure callback




// const promises1=new Promise(function(resolve,reject){

// })

// new promise(function(resolve,reject){

// })

// function print(){
//     console.log("hello");
// }

// function prints(){
//     console.log("hello");
// }

// setTimeout(print,5000)

// setInterval(prints,3000)

// let promise1=new Promise(function(resolve,reject){
//      setTimeout(()=>{
//         console.log("hello");
//         resolve()
//      },3000)    
// })

// promise1.then(()=>{
//     console.log('promise');
// })

// let promise1=new promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("hello");
//         resolve()
//      },2000)    
// }).then(()=>{
//     console.log('hi');
// })


// let promise3=new promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve({username:"a",email:'a@gmail.com'})
//     },2000)
// }).then(()=>{
//     console.log(user);
//     console.log('hi');
//     return user.username
// }).then((item)=>{
//     console.log(item);
// }).catch((error)=>{
//     console.log(error);
// })