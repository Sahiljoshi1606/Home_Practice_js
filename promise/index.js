let age = 1 ;
const greet = (age)=>{
return new Promise ((resolve , reject)=>{
    if(age >= 18){
        resolve ("yes vote")
    }
    else{
        reject ( "cant vote")
    }
})
}
greet().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});