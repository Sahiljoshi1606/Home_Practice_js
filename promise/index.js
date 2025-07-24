// let age = 1 ;
// const greet = (age)=>{
// return new Promise ((resolve , reject)=>{
//     if(age >= 18){
//         resolve ("yes vote")
//     }
//     else{
//         reject ( "cant vote")
//     }
// })
// }
// greet().then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

// function complet() {
//   return new Promise((resolve, reject) => {
//     // resolve("Assignment is completed");
//     reject("assignment is not completed");
//   });
// }
// complet()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let obj = {name : "sahil" , age :"21" }
// obj.name = "om"
// console.log(obj)

// let arr = [1,2,3,4,5,6,7];
// let big = 0;
// let value = 0
// for (let i = 0 ; i < arr.length ; i++){
//     if(arr[i] > big){
//          value = big
//         big = arr[i]

//     }

// }
// console.log(value)

// Q1 (Updated): Find the First Non-Repeating Element in an Array
// Input: [4, 5, 1, 2, 0, 4, 1, 0]
// Output: 5

// let arr = [4, 5, 1, 2, 0, 4, 1, 0] ;
// let obj = {};
// for( i = 0 ; i < arr.length ; i++){
//     let num = arr[i]
//     if(!obj[num] ){
//         obj[num] = 1
//     }
//     else{
//         obj[num]++
//     }
// }
// // console.log(obj)
// let firstno = null ;
// for ( let i = 0 ; i < arr.length ; i++){
//     if(obj[arr[i]] == 1){
//         firstno = arr[i]
//         break;
//     }
// }
// console.log(firstno);

// �
//  Q2. Check if Two Objects Have the Same Keys and Values
// let obj1 = { a: 1, b: 2 };
// let obj2 = { b: 2, a: 1 };

// let obj1 = { a: 1, b: 2 };
// let obj2 = { b: 2, a: 1 };

// let flag = true;
// for (let key in obj1) {
//   if (obj2[key] !== obj1[key]) {
//     flag = false;
//     break;
//   }
// }
//   for (let key in obj2) {
//     if (obj1[key] !== obj2[key]) {
//       flag = false;
//       break;
//     }
//   }

// console.log(flag);


// Q3. Merge Two Arrays and Remove Duplicates 
// Input: [1, 2, 3], [2, 3, 4] 
// Output: [1, 2, 3, 4] 
// �
// �
//  Use Set or object keys for uniqueness 


// let arr1 = [1, 2, 3] ; 
// let arr2 = [2, 3, 4]; 
// let ele = [...arr1 , ...arr2];
// let uniqueness = [...new Set (ele)];
// console.log(uniqueness)


// (Updated): Convert an Array of Objects into a Single Object 
// let arr = [ 
// { id: 1, name: "A" }, 
// { id: 2, name: "B" } 
// ]; 
// Output: 
// { 
// 1: "A", 
// 2: "B" 
// } 
// �
// �
//  Use a loop or reduce() to convert array into object with id as key 

// let arr = [ 
// { id: 1, name: "A" }, 
// { id: 2, name: "B" } 
// ];

// let ele = arr.reduce((acc , curr)=>{
// acc[curr.id] = curr.name
// return acc ; 
// },{})
// console.log(ele)


 let arr = [ 
{ id: 1, name: "A" }, 
{ id: 2, name: "B" } 
];


result = {}
for (i = 0 ; i < arr.length ; i++){
    let ele = arr[i]
    result [ele.id] = ele.name 
}
console.log(result)