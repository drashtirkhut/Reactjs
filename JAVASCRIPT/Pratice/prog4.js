//--14-Reverse array javascript--//

// let array=["x","y","z","a"];

// let reverce=array.reverse()

//     console.log(reverce);

//--15-JavaScript concate or merge two Arrays--//

//    let array1=[34,65];
//    let array2=["a","b"];

//    let newarray=array1.concat(array2)

//    console.log(newarray);

//    //--13-Retrieve Today’s Date in JavaScript--//

//    let today= new Date()

//    console.log(today);

   //--1-Display Alert in JavaScript--//

//    alert("Hi javascript")

   //--18-if else statement in JavaScript--//

//    let a=100;

//    if(a>=100)
//    {
//     console.log("greater then 100");
//    }
//    else
//    {
//     console.log("not greater then 100");
//    }

// //--19-Insert element in array javascript--//

// let arry=[10,32,44,55];

// array[2]=36;

// console.log(arry);


// //--39-javascript get today’s date--//

//  let today1= new Date()

//     console.log(today1);

//  //--54-Break and Continue in JavaScript--//

// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//         break; 
//     }
//     console.log(i);
// }
// // continue
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }

//--55-JavaScript Conditional Operator--//

// let mark = 20;
// let result = mark <= 80 ? " Good" : "very good";
// console.log(result);

// //--21-getElementsByClassName() method in JavaScript--//

// document . getElementsByClassName("demo").innerHTML

//  = "hello,javascript!"

//  document . getElementsByTagName("demo").innerHTML

//  = "hello "

//--16-Reverse String in JavaScript--//
// let String="HELLO"

// -- 62 How to sort array value using sort() method in JavaScript --//

// let array =[12,43,56,78,12,65,5,9]

//  let sort=array.sort()

//  let Num=array.sort((a,b)=>a-b)

//  console.log(Num);
 
// // Reverse String in JavaScript

//  let String="a";

//  let reverce=String.reverse()
 
//      console.log(reverce);


// 56. Example of this KeyWord in JavaScript

// const human = {
//        firstName: "jones",
//        lastName: "walker",
//        age: 55
//    }
   
//    const person= {
//        firstName: "jeon",
//        lastName: "jungkook",
//    }

// function intro(message , pro){
//        console.log(`${message} My FirstName is ${this.firstName} and  LastName is ${this.lastName} ${pro}`);
//    }

//    console.log(intro());

//    let result1 = intro.apply( person , ["Hi" , "I am singer"]);
//    console.log(result1); 


//--50- Return Boolean value of an Integer In JavaScrip --//

// let x=10;
// let y=20;

// console.log(x>y);


// 48. Find index of Largest value in An Array in JavaScript

// let array=["10","23","56","78","54","20"]



// 51. JavaScript Check an object is an array or not


// let Obj=[45,677,87,34]

// let is=Object.is('obj','obj')

// console.log(is);

// let is1=Object.is('obj','obj1')

// console.log(is1);

// let is2=Object.is([],[])

// console.log(is2);

// 45. Display Message every 3 second using Javascript

// function greet(){
//        console.log("hello");
//    }
//     setInterval(greet,3000)

// 49. Try and Catch in JavaScript


//  46. JavaScript get max value in array of objects\

// let array=Math.max(12,34,56,67)
// console.log(array);


// 4. mouseover and mouseout in javascript //

// $(function(){
//          $('#button1').mouseover(function(){
//            $('#demo').hide()
//          })
//        })
       
       
 $(function(){
         $('#button2').mouseout(function(){
           $('#heading').hide()
         })
       })
       

//  2. Display Confirmation box using JavaScript
