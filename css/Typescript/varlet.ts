function test(){
    var x : number =10;
    let y : number =20;

    if(y>10){
        var z : number = 30;
        let q : number = 40;
        console.log("Inside If: ",x,y,z,q);
    }
    console.log("Inside If: ",x,y,z);
}
test();