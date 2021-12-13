var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.display = function () {
        console.log("id : " + this.id + " name : " + this.name + " stream " + this.stram);
    };
    return Employee;
}());
var obj = new Employee();
obj.id = 1;
obj.name = "test";
obj.stram = 'maths';
obj.display();
