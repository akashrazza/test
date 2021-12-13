function Max3Num(num1, num2, num3) {
    if ((num1 > num2) && (num1 > num3)) {
        return num1;
    }
    else if ((num2 > num1) && (num2 > num3)) {
        return num2;
    }
    else {
        return num3;
    }
}
function Min3Num(num1, num2, num3) {
    if ((num1 < num2) && (num1 < num3)) {
        return num1;
    }
    else if ((num2 < num1) && (num2 < num3)) {
        return num2;
    }
    else {
        return num3;
    }
}
console.log("Maximum of number : ", Max3Num(23, 30, 60));
console.log("Minimum of arr", Min3Num(23, 30, 60));
