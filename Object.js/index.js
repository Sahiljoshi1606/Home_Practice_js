var num = [1,1,2,3,3,2,3,4,5,4,4,4,5,5,5,5,5,5,5];
var obj = {};
for (let i = 0 ; i < num.length ; i++){
  if (obj [num[i]]){
    obj [num[i]]++
  }
  else{
    obj [num[i]]=1
  }
    }
     console.log(obj)  


     let max = 0 ;
     let value = null;
for (let key in obj){
    if(obj[key] > max){
        value = obj[key];
        max = obj[key];
        console.log (max , value)
    }
}
// console.log(value)