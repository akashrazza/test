//Fabnocci
var num = 10;
var result = 1;
var fib = [0, 1];
for (var i = 2; i < num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
}
console.log("Fabnocii of number : ", fib);
