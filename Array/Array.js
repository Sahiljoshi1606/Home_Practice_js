// 1. Find the second highest number in an array without sorting it.
// Input: [10, 5, 20, 8, 15]
// Output: 15

// let array = [10, 5, 20, 8, 15];
// let Highest = [];
// let SecoundHighest = [];
// for ( i = 0 ; i < array.length ; i++){
//    if( array[i] > Highest){
//     SecoundHighest = Highest ;
//     Highest = array[i]
//    }
//    else if ( array[i] > SecoundHighest && SecoundHighest !== Highest){
//     SecoundHighest = array[i];
//    }

// }
// console.log(SecoundHighest)

// 3. Reverse only words in an array of strings.
// Input: ["hello", "world"]
// Output: ["olleh", "dlrow"]

// let arr = ["hello", "world"];
// let reverse = [];
// for ( i = 0 ; i < arr.length ; i++){
//     let element = arr[i]
//     // console.log(element)
//     let rev = "";
//     for( j  = element.length - 1 ; j >= 0 ; j--){
//       rev += element[j];
//     }
//    reverse.push(rev)
// }
// console.log(reverse)

// let arr =   ["hello", "world"];
// let reverse = [];
// for ( let i = 0 ; i < arr.length ; i++){
//     let element = arr[i]
//     let rev = "";
//     for ( let j = element.length - 1 ; j >= 0 ; j--){
//         rev += element[j]

//     }
//     reverse.push(rev)
// }
// console.log(reverse)

// 4) Check even or odd using map.
// Input: [1, 2, 3, 4]
// Output: ["odd", "even", "odd", "even"]

// let arr = [1, 2, 3, 4];
// let element = arr.map((ele)=> ele % 2 ==0 ? "even" : "odd")
// console.log(element);

// 5) Flatten a nested array (1 level deep).
// Input: [1, 2, [3, 4], 5]
// Output: [1, 2, 3, 4, 5]

// let array = [1, 2, [3, 4], 5] ;
// let element  = array.flat();
// console.log(element)

// 6) Print all prime numbers between 10 and 50.
// Output: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

// for (let i = 10; i <= 50; i++) {
//   let prime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       prime = false;
//       break;
//     }
//   }
//   if (prime) {
//     console.log(i);
//   }
// }

// for ( num = 10 ; num <= 50 ; num++){
//     let prime = true ;
//     for ( i = 2 ; i < num ; i++){
//         if ( num % i == 0 ){
//             prime = false;
//         }

//     }
//      if(prime){
//             console.log(num)
//         }
// }

//  7)Filter names that start with vowels.
// Input: ["Alice", "Bob", "Eve", "Uma", "Charlie"]
// Output: ["Alice", "Eve", "Uma"]

// let arr =  ["Alice", "Bob", "Eve", "Uma", "Charlie"];
// let ele = arr.filter(function(num){
//     let vowel = num[0].toLowerCase();
//     return "aeiou" .includes(vowel)
// })
// console.log(ele)

// let arr =  ["Alice", "Bob", "Eve", "Uma", "Charlie"];
// let ele = arr.filter(function(num){
//     let vowel = num[0].toLowerCase();
//     return "aeiou" .includes(vowel)
// })
// console.log(ele)

// 9) Check if all array elements are greater than 10.
// Input: [12, 15, 22]
// Output: true

// let arr = [12, 15, 22 , 9 ];
// let greater =  true ;
// for ( let i = 0 ; i < arr.length ; i ++){
//    if ( arr[i] <= 10){
//     greater = false ;
//     break;
//    }
// }
// console.log(greater)

// let element = arr.map((num)=> num <= 10 ? "false" : "true")
// console.log(element)

// 10) Filter numbers divisible by 3 and 5.
// Input: [10, 15, 30, 20, 45]
// Output: [15, 30, 45]

// let arr = [10, 15, 30, 20, 45] ;
// let element = arr.filter((num)=>num % 3 == 0 && num % 5 == 0 )
// console.log(element);

// 11) Fibonacci sequence up to 15 terms.
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]

// let arr = [0 , 1];
// for ( let i = 2 ; i <= 15; i++){
//  arr[i] = arr[i - 1]+ arr [i - 2];
// }
//   console.log(arr);

// 12)  Count occurrences of a value in array.
// Input: [1, 2, 1, 3, 1, 4], Element: 1
// Output: 3
// let arr = [1, 2, 1, 3, 1, 4];
// let element = arr.reduce((acc , curr) => curr == 1 ? acc+1 : acc , 0)
// console.log(element)

// 13)Sum of even numbers using reduce.
// Input: [1, 2, 3, 4, 5, 6]
// Output: 12

// let arr = [1, 2, 3, 4, 5, 6];
// let element = arr.reduce((acc , curr) =>{
//   return  curr % 2 == 0 ? acc + curr :acc
// } , 0)
// console.log(element)

//  14)Check if string is palindrome.
// Input: "madam"
// Output: true

// let string = "madam"
// let element = string == string.split("").reverse().join("")
// console.log(element)

// 3. Reverse only words in an array of strings.
// Input: ["hello", "world"]
// Output: ["olleh", "dlrow"]

// let arr = ["hello", "world"];
// let reverse = [];
// for ( i = 0 ; i < arr.length ; i++){
//     let element = arr[i]
//     let rev = "";
//     for ( j = element.length - 1 ; j >= i ; j-- ){
//         rev += element[j]
//     }
//     reverse.push(rev)
// }
// console.log(reverse)

// 17. Remove duplicates from array without Set.
// Input: [1, 2, 2, 3, 4, 1]
// Output: [1, 2, 3, 4]

// let arr =  [1, 2, 2, 3, 4, 1] ;
// let element = arr.filter((num , index )=>{
//     return arr.indexOf(num) == index ;
// });
// console.log(element)

// 18. Slice first 3 elements of array.
// Input: [10, 20, 30, 40, 50]
// Output: [10, 20, 30]

// let arr  = [10, 20, 30, 40, 50] ;
// let ele = arr.slice(0,3)
// console.log(ele)

// 20. Reverse array using while loop (in-place).
// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]

// let arr = [1, 2, 3, 4] ;
// let reverse = [];
// for(let i = arr.length - 1 ; i >= 0 ; i--){
//     let ele = arr[i]
//    reverse.push(ele)
// }
// console.log(reverse);

// 20. Reverse array using while loop (in-place).
// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]

// let arr = [1, 2, 3, 4] ;
// let reverse = [];
// for (let i = arr.length -1 ; i >=0 ; i--){
//     reverse.push(arr[i])
// }
// console.log(reverse)

// 22. Find the largest prime number in an array.
// Input: [10, 23, 15, 37, 41, 29]

//  let arr = [10, 23, 15, 37, 41, 29];
//  let prime = true;
//  let highestPrime = 0;
//  for (let i = 2; i <arr.length ; i++){
//     if(arr[i] % i ==0){
//         prime=false;
//         break
//     }
//     if(prime){
//         console.log(arr[i])
//     }
//     highestPrime = Math.max(highestPrime , arr[i])

//  }
//  console.log("Highest Prime Number: ", highestPrime)

// 24. Find the second largest prime number in an array.
// Input: [10, 23, 15, 37, 41, 29]

// let arr = [10, 23, 15, 37, 41, 29];
// let highest = 0;
// let secoundHighest = 0;
//  for (let i = 0 ; i < arr.length ; i++){
//     if( arr[i] > highest){
//      secoundHighest = highest ;
//      highest = arr[i]
//     } else if(arr[i] > secoundHighest && arr[i] < highest){
//      secoundHighest = arr[i]
//     }
// }
// console.log("Second Highest Prime Number: ", secoundHighest)
