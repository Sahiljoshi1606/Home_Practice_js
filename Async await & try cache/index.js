function feachdata (){
    return new Promise ((resolve , reject)=>{
        setTimeout(() => {
           reject ("product")
        }, 5000);
    })
}
 async function data (){
   try{
     const result = await feachdata()
    console.log(result)
   }
   catch(error){
    console.log(error)
   }
}
data()