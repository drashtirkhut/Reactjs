// javascript temple literals
let string1="hi, i 'am' a frontend developer!";

let string2='hi, i "am" a frontend developer!';

let string3="'hi, i 'am' a frontend developer!";

let string4="hi, i \"am\"a frontend developer!";

let string5='hi, i \'am\' a frontend developer!'

console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);
console.log(string5);

let string6 = `hi, i 'am' a
frontend developr!`;

console.log(string6);

// passing the variables!

let text = "developr";
let string7 = "hi, i 'am' a frontend ${text}!";
let string8 = "hi, i 'am' a frontend ${text}!";

console.log(string7);
console.log(string8);


// javascript loops 

/*
while loop
do-while loop
for loop
for in... loop
for of...loop
*/

// while loops

/*
while(condition){
    statements
}

*/
let num = 0;
while(num <= 10){
    console.log("hello javascript!");
    document.write("hello javascript!" + "<br>");
    document.write('hello javascript! ${num}' + "<br>");
    document.getelementById("demo").innerHTML = "hello world!" + num;
    num++;
}


    // do-while loop

    do{
        statements;
    }while(condition);
    

    let i = -10;

    do{
        document.write('our  loop! ${i}' + "<br>");
        i++;
    }while(i <= 10)


    // for loop


    for(initilization; condition ; afterthought){



        let i = 0;
        let n = 10;

        for(i ; i < n; i++){
           console.log("jay mataji!");

            for(let i = 0 ; i < 10; i++)
            console.log("hello");

            for(i = 10; i < 10 ; i++)
            console.log("hello")

            for(let i = 0; i < 10; i++)
            console.log("hello")

            for(let i = 0; i < 10; i++)
            console.log("hello")
        }
    }
