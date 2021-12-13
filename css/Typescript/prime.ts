var num : number = 39;
function isPrime(num){
    for (var i : number = 2; i<Math.sqrt(num); i++){
        if(num%i==0){
            console.log("not prime");
            return;
        }
    }
    console.log("prime");
}
isPrime(num);
