function Max2Num(num1 : number,num2 : number) : number{
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}
console.log(`Maximum of 2 numbers ${Max2Num(20,50)}`);