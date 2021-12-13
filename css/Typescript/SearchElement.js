var arr = new Array(23, 42, 45, 2, 1, 53434, 124, 1);
var elementToSearch = 95;
var flag = false;
for (var element in arr) {
    if (elementToSearch == arr[element]) {
        console.log(arr[element]);
        flag = true;
    }
}
if (flag) {
    console.log("found");
}
else {
    console.log("not found");
}
