class Employee{
    id:number;
    name:string;
    stram:string

    display(){
        console.log(`id : ${this.id} name : ${this.name} stream ${this.stram}`);
    }
}
var obj  = new Employee();
obj.id = 1;
obj.name = "test";
obj.stram = 'maths'
obj.display();