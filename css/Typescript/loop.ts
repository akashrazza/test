//Fabnocci
var num : number = 10;
var result : number = 1;
var fib = [0,1]
for (var i : number = 2; i < num; i++){
    fib.push(fib[i-1]+fib[i-2]);
}
console.log("Fabnocii of number : ",fib);