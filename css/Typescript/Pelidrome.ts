var data23 : number | string;


function Pelidrome(data2:number|string){
    if(typeof data2 == "number"){
        var string_data = data2.toString()
        if(string_data == string_data.split('').reverse().join('')){
            console.log("It is pelidarome");
        }
        else{
            console.log("not pelidrome");
        }
    }
    
    if(typeof data2== "string"){
        if(data2==data2.split('').reverse().join('')){
            console.log("pelidrome");
        }
        else{
            console.log("not pelidrome");
        }
    }
}
Pelidrome(323);
Pelidrome("raar");
Pelidrome(3233);
Pelidrome("raja");