// 1  Print the numbers from 0 to 15.

   let i=0;

  for(i ; i<=15 ; i++)
   {
       console.log(i);
   }

//2 Print the numbers from 12 to 24.
  let j=12;

  for(j ; j<=24 ; j++)
  {
      console.log(j);
  }

//3 Print the ODD numbers from 7 to 31.

   let a=7

    for(a; a<=31; a++)
    {
        if(a%2!=0)
        {
            console.log(a);
        }
    }

//4  Print the EVEN numbers from 10 to -20.

   let b=10

   for(b; b>=-20; b--)
   {
       if(b%2==0)
       {
           console.log(b);
       }
   }

// 5 Iterate through all numbers from 1 to 45. Print the
//  following:
//  ● Formultiples of 3 print “Fizz”
//  ● Formultiples of 5 print “Buzz”
//  ● Formultiples of 3 and 5 print “FizzBuzz”

 for (let i = 1; i <= 45; i++) {
     if (i % 3==0 && i % 5==0) {
       console.log("fizzbuzz");
     }
      else if (i % 3==0) {
       console.log("fizz");
     }
      else if (i % 5==0) {
        console.log("buzz");
     }
      else {
       console.log(i);
     }
   }

// 6 Print all the elements of the following array
//  var thisIsAnArray = ["element1", "element2", "element3",
//  "element4"];

 var Arr = ["elem1","elem2","elem3","elem4"];

 for (let i = 0; i < 4; i++) {
     console.log(Arr[i]);
 }

// 7   Calculate the sum of all the numbers in the following array
  var numarr = [1,13,22,123,49]
  numarr.length

 var numarr = [1, 13, 22, 123, 49];
 let sum = 0;
 for (let i = 0; i < 5; i++) {
     sum += numarr[i];
 }
 console.log(sum);