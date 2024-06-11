//-- javascript nested loop

// for(Infinity; condition; afterthought){
//     for(Infinity; condition; afterthought){

//     }
// }

// for(let i=0; i<10; i++){
//     console.log(`${i} main loop`);
//     for(let j=0; j<5; j++){
//         console.log(`${j} child loop`);
//     }
// }

//-- javascript break statements

// for(let i=0; i<10; i++){
//     console.log(`${i} main loop`);
//     if(i==2){
//         break;
//     }
//     for(let j=0; j<5; j++){
//          console.log(`${j} child loop`);
//    }
// }


// loops:for(let i=0; i<10; i++){
//     console.log(`${i} main loop`);
//     if(i==2){
//         break loops;
//     }
//     for(let j=0; j<5; j++){
//          console.log(`${j} child loop`);
//    }
// }

//-- javascript continu statements

// loops:for(let i=0; i<10; i++){
//     console.log(`${i} main loop`);
//          if(i==3){
//              continue loops;
//          }
//     for(let j=0; j<10; j++){
//          console.log(`${j} child loop`);
//     }
//  }

//-- javascript for...in loop

// let object={firstname:"x",lastname:"y",age:79,gender:"z"};

// let data1=object.firstname
// let data2=object.lastname
// let data3=object.age
// let data4=object.gender

// console.log(data1);
// console.log(data2);
// console.log(data3);
// console.log(data4);

// console.log(object);

// for(let key in object){
//     console.log(`${key}=${object[key]}`);
// }

//-- javascript for..of loop

// let newarray=["x","y",79,"z"];

// let data5=newarray[0]
// let data6=newarray[1]
// let data7=newarray[2]
// let data8=newarray[3]

// console.log(data5);
// console.log(data6);
// console.log(data7);
// console.log(data8);

// for(let value of newarray){
//     console.log(`${value}`);
// }

let string="javascript";

for(let char of string){
    console.log(`${char}`);
}

