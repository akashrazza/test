var num = 10;
function AllPrime(num) {
    var arr = new Array();
    // const foo: string[] = new Array(3).fill('');
    // console.log(foo);
    for (var k in arr) {
        arr[k] = false;
    }
    console.log(arr);
    for (var i = 2; i < arr.length; i++) {
        if (arr[i] == false) {
            for (var j = i + i; j < arr.length; j = j + j) {
                arr[i] = true;
            }
        }
    }
    console.log(arr);
}
AllPrime(num);
