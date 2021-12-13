class Student{
    private id : number;
    public name : string;

    constructor(){

    }
    display(){
        console.log(`id: ${this.id} Name ${this.name}`);
    }
}
var objstu= new Student();
