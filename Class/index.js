class Teacher {
    constructor(name , subject){
        this.name = name ;
        this.subject = subject ;
    }
    Teach(){
    console.log (this.name , "Teachear" , this.subject)
    return (this.name , "Teachear" , this.subject)
}
}
const teacher1 = new Teacher ("sagar" , "html");
console.log(teacher1.name);
console.log(teacher1.subject);
console.log(teacher1.Teach());


const teacher2 = new Teacher ("om" , "html");
console.log(teacher2.name);
console.log(teacher2.subject);
console.log(teacher2.Teach());