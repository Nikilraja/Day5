//Print odd numbers in an array
//anonymous

function nikil(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
  }
  nikil([1,2,3,4]);

//IIFE 

(function(array1){
for(var i = 0 ; i< array1.length ; i++){
          if(array1[i]%2!=0){
             console.log(array1[i]);
          } 
     }
})
([1,2,3,4]);

//Convert all the strings to title caps in a string array
//anonymous
function toTitleCase(str) {
   return str.toLowerCase().split(' ').map(function (word) {
     return (word.charAt(0).toUpperCase() + word.slice(1));
   }).join(' ');
 }
 console.log(toTitleCase("we are the good person"));

 //IIFE

 (function(str1){
console.log(str1.toLowerCase().split(' ').map(function (word) {
   return (word.charAt(0).toUpperCase() + word.slice(1));
 }).join(' '));
}
 )
 ("we are good person");


 //Sum of all numbers in an array
 //anonymous
 function sumArray(array2) {
   let sum = 0;
 
   array2.forEach(item => {
     sum += item;
   });
 
   console.log(sum);
   
 }
 
 sumArray([1, 4, 0, 9, -4]);

//  //IIFE

 (function(array3){
   let sum = 0;
 
   array3.forEach(item => {
     sum += item;
   });
 
   console.log(sum);

 })
 ([1,5,6])


// Return all the prime numbers in an array
//anonymous
function primeNum(newArray){
    const myPrimeArray = newArray.filter(num => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num !== 1;
    });
    console.log(myPrimeArray);

}
primeNum([1,2,5,7,9]);

//IIFE

(function(newArray1){
   const myPrimeArray = newArray1.filter(num => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num !== 1;
    });
    console.log(myPrimeArray);  
})
([1,2,5,7,9]);


//Return all the palindromes in an array
//anonymous 
function getAllPalindromes(word) {
   console.log(  word.filter((word)=> word.split("").reverse().join("") === word));
}
getAllPalindromes(["hello", "noon"]);

//IIFE
(function getAllPalindromes(word) {
   console.log(  word.filter((word)=> word.split("").reverse().join("") === word));
})
(["hello", "noon","civic"]);


//Rotate an array by k times.
//anonymous

function RightRotate(a, n, k)
{
  
    // If rotation is greater
    // than size of array
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
            // Printing rightmost
            // kth elements
            console.log(a[n + i - k] + " ");
        }
        else {
  
            // Prints array after
            // 'k' elements
            console.log((a[i - k]) + " ");
        }
    }
    console.log("<br>");
}
  
// Driver code
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
  
RightRotate(Array, N, K);
  
//IIFE


(function RightRotate(a, n, k)
{
  
    // If rotation is greater
    // than size of array
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
            // Printing rightmost
            // kth elements
            console.log(a[n + i - k] + " ");
        }
        else {
  
            // Prints array after
            // 'k' elements
            console.log((a[i - k]) + " ");
        }
    }  
// Driver code
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
})
  
(Array, N, K);


//Print odd numbers in an array
// arrow function

let arrow = (odd)=>
{
  for(var i = 0 ; i< odd.length ; i++){
    if(odd[i]%2!=0){
       console.log(odd[i])
    } 
} 
}
arrow([1,2,3,4,5,6,7])

//Convert all the strings to title caps in a string array
//arrow function

let titleCase = (str)=>
{
  return str.toLowerCase().split(' ').map(function (word) {
    return(word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');

}
console.log(titleCase("we are Bad person"));

//Sum of all numbers in an array
//arrow function

let sumArray0 = (array2)=> {
  let sum = 0;

  array2.forEach(item => {
    sum += item;
  });

  console.log(sum);
  
}

sumArray0([1, 4, 0, 9, -4,8,-3]);


//Return all the prime numbers in an array
//arrow function

let primeNum0 = (newArray)=>
{
  const myPrimeArray = newArray.filter(num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  });
  console.log(myPrimeArray);

}
primeNum0([1,2,5,7,9,3]);


//Return all the palindromes in an array
//arrow function

let getAllPalindromes0 = (word)=> {
  console.log(  word.filter((word)=> word.split("").reverse().join("") === word));
}
getAllPalindromes0(["hello", "noon", "night"]);
