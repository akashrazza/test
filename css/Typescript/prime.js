var num = 39;
function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log("not prime");
            return;
        }
    }
    console.log("prime");
}
isPrime(num);
