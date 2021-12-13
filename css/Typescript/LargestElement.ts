var arr = new Array (23,42,45,2,1,53434,124,1);

var test : number = 0;

for (var element in arr){
    if(arr[element] > test){
        test=arr[element];
    }
}
console.log(test);