// food_id, name, description and cost
var Resturent = /** @class */ (function () {
    function Resturent(id, name, description, cose) {
        this.food_id = id;
        this.name = name;
        this.description = description;
        this.cost = cose;
    }
    Resturent.prototype.display = function () {
        console.log(" id : " + this.food_id + " name : " + this.name + " description : " + this.description + " cost : " + this.cost);
    };
    return Resturent;
}());
var obj1 = new Resturent(1, 'test', 'testing', 32);
obj1.display();
