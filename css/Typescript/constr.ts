// food_id, name, description and cost
class Resturent {
    food_id : number;
    name : string;
    description : string;
    cost : number

    constructor(id:number,name:string,description:string,cose:number){
        this.food_id=id;
        this.name=name;
        this.description = description;
        this.cost = cose;
    }
    display(){
        console.log(` id : ${this.food_id} name : ${this.name} description : ${this.description} cost : ${this.cost}`)
    }
}
var obj1  = new Resturent(1,'test','testing',32);
obj1.display();