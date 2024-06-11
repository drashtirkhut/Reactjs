// // javascript object method

// // is() method //

// {
//     let obj=[22,44,54,67]

//     let Obj=[22,44,54,67]

//     let is=Object.is('obj','obj')

//     console.log(is);

//     let is1=Object.is('obj','obj1')

//     console.log(is1);

//     let is2=Object.is([],[])

//     console.log(is2);
// }

// // object.getownpropertynames() method //

// {
//     const object1={
//         a:10,
//         b:20,
//         c:30,
//     };

//     console.log(Object.getOwnPropertyNames(object1));
//     console.log(Object.keys(object1));
// }

// // object.fromentries() method //

// let obj=new Map([["Option-1",20],["Option-2",40]])

// let dataEntries=Object.fromEntries(obj)

// console.log(dataEntries);

// // object.defineproperties() method  //

// let object={}

// let props2=Object.defineProperties(
//     object,{
//         obj1:{
//             name:"object1",
//             value:433
//         },
//         obj2:{

//         }
//     }
// )

// console.log(object);

// let obj1={
//     name:"object",
//     value:20

// }

// let props=Object.defineProperties(obj,{})

// console.log(obj);


// object.prototype method //
// {
//         let obj = [];
    
//         let obj1 = {Key1 : 20 , Key2:30 , Key3:50 , Key4:90};
    
//         console.log(obj1.Key1);
    
//         let DataObject = Object.create(obj1);
    
//         console.log(DataObject.Key2);
    
//         let ProtoObject = Object.getPrototypeOf(DataObject);
    
//         console.log(ProtoObject === obj1);
//  }
    
    // Javascript Call back function
    
    // {
    //     // function(){}
    
    //     function sayHello(){
    //         console.log('Hello');
    //     }
    
    //     function sayHi(){
    //         console.log("Hi");
    //     }
    
    //     function sum(a , b , callback){
    //         callback();
    //         return console.log(a + b);
    //     }
    
    //     console.log(sum(10 , 20 , sayHello));
    
    //     console.log(sum(30 , 40 , sayHi));
    // }
    
    // Javascript arrow functions
    
    // function foo(){
    //     return console.log("This is basic function");
    // }
    
    // foo();

    // const foos = () => {return console.log('This is Arrow Function');} 
    // foos()
    
    // const foos1 = () => console.log("This is Arrow Function");
    // foos1()
    
    //  const fo = a => a + a;
    // console.log(fo(10));
    
    // const foo1 = ( a , b ) => a + b;
    // console.log(foo1(10,20));   