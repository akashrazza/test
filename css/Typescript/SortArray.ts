var num = new Array(21,43,54,12,24,45,3,4);
function QuickSort(num):any{
    if(num.length<=0){
        return [];
    }
    let pivot = num[0]
    let left=new Array();
    let right = new Array();
    let equal = new Array();
    
    for (var element of num){
        if(pivot>element){
            left.push(element);
        }
        else if(pivot<element){
            right.push(element);
        }
        else{
            equal.push(element)
        }
    }

    let left_data = QuickSort(left);
    let rigth_data = QuickSort(right);

    return [...left_data,...equal,...rigth_data]

}

console.log(QuickSort(num));