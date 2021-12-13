
        
const Data = [{
    "Id":9,
    "Name":"Raja",
    "Stream":"CSE",
    "Marks":56
},{
    "Id":5,
    "Name":"Gyan",
    "Stream":"ECE",
    "Marks":100
},{
    "Id":5,
    "Name":"Manish",
    "Stream":"ME",
    "Marks":45
},{
    "Id":87,
    "Name":"Charan",
    "Stream":"CSE",
    "Marks":100
},{
    "Id":100,
    "Name":"Prveen",
    "Stream":"IT",
    "Marks":34
}]
var filterd_array=[]


function IterateData(Items){
        var BodyElement = document.getElementById('table-body');
        BodyElement.innerHTML = '';

        //Itrate over Data Array
        for(i = 0; i < Items.length; i++){
            //Edit Button 
            var EditButton = document.createElement('input');
            EditButton.setAttribute('type','button');
            EditButton.setAttribute('onClick','Edit('+Data.indexOf(Items[i])+')');
            EditButton.setAttribute('value','Edit');
            EditButton.setAttribute('class','btn btn-secondary');
            EditButton.setAttribute('style',"margin-left: 20px;");

            //Delete Button
            var DeleteButton = document.createElement('input');
            DeleteButton.setAttribute('type','button');
            DeleteButton.setAttribute('onClick','Delete('+Data.indexOf(Items[i])+')');
            DeleteButton.setAttribute('value','Delete');
            DeleteButton.setAttribute('class','btn btn-danger');
            DeleteButton.setAttribute('style',"margin-left: 20px;");

            //Table cell Combining Edit and Delete (Table cell 6)
            var ButtonCell = document.createElement('td');
            ButtonCell.appendChild(EditButton);
            ButtonCell.appendChild(DeleteButton);
            

            //Table Row
            var RowElement = document.createElement('tr');
            RowElement.setAttribute('id','row'+Data.indexOf(Items[i]));
            

            //Table cell 1
            var IdElement  = document.createElement('td');
            var IdText = document.createTextNode(Items[i].Id);
            IdElement.appendChild(IdText);

            //Table cell 2
            var NameElement  = document.createElement('td');
            var NameText = document.createTextNode(Items[i].Name);
            NameElement.appendChild(NameText);

            //Table cell 3
            var StreamElement  = document.createElement('td');
            var StreamText = document.createTextNode(Items[i].Stream);
            StreamElement.appendChild(StreamText);

            //Table cell 4
            var MarksElement  = document.createElement('td');
            var MarksText = document.createTextNode(Items[i].Marks);
            MarksElement.appendChild(MarksText);

            //Assiging cells to Row
            RowElement.appendChild(IdElement);
            RowElement.appendChild(NameElement);
            RowElement.appendChild(StreamElement);
            RowElement.appendChild(MarksElement);
            RowElement.appendChild(ButtonCell);

            //Attaching Row to table body
            BodyElement.appendChild(RowElement);

    }
}

//Check for filtered Array
if(filterd_array.length==0){
    IterateData(Data)
}
else{
    IterateData(filterd_array)
}

//Add Button Operation
function Add(){
    Data.push(
        {
            "Id" : 0,
            "Name" : "",
            "Stream" : "",
            "Marks" : ""
        }
    );
    //Index of data pushed
    var i = Data.length-1
    
    //Save Button
    var SaveButton = document.createElement('input');
    SaveButton.setAttribute('type','button');
    SaveButton.setAttribute('onClick','Save('+i+')');
    SaveButton.setAttribute('value','Save')
    SaveButton.setAttribute('class','btn btn-primary');
    SaveButton.setAttribute('style',"margin-left: 20px;");
    
    //Delete Button
    var DeleteButton = document.createElement('input');
    DeleteButton.setAttribute('type','button');
    DeleteButton.setAttribute('onClick','Delete('+i+')');
    DeleteButton.setAttribute('value','Delete');
    DeleteButton.setAttribute('class','btn btn-danger');
    DeleteButton.setAttribute('style',"margin-left: 20px;");
    
    //Assigning Delete and Save (table Row 6)
    var ButtonCell = document.createElement('td');
    ButtonCell.appendChild(SaveButton);
    ButtonCell.appendChild(DeleteButton);
    
    
    //Adding Row into Table
    var RowElement = document.createElement('tr');
    RowElement.setAttribute('id','row'+i);


    //table cell 1
    var IdElement  = document.createElement('td');
    var IdInput = document.createElement('input');
    IdInput.setAttribute('type','text');
    IdInput.setAttribute('Placeholder','Id');
    IdInput.setAttribute('id','input1');
    IdElement.appendChild(IdInput);

    //Table cell 2
    var NameElement  = document.createElement('td');
    var NameInput = document.createElement('input');
    NameInput.setAttribute('type','text');
    NameInput.setAttribute('Placeholder','Name');
    NameInput.setAttribute('id','input2');
    NameElement.appendChild(NameInput);

    // Table cell 3
    var StreamElement  = document.createElement('td');
    var StreamInput = document.createElement('input');
    StreamInput.setAttribute('type','text');
    StreamInput.setAttribute('Placeholder','Stream');
    StreamInput.setAttribute('id','input3');
    StreamElement.appendChild(StreamInput);

    //Table cell 4
    var MarksElement  = document.createElement('td');
    var MarksInput = document.createElement('input');
    MarksInput.setAttribute('type','text');
    MarksInput.setAttribute('Placeholder','Stream');
    MarksInput.setAttribute('id','input4');
    MarksElement.appendChild(MarksInput);

    //Adding Cells to Row
    RowElement.appendChild(IdElement);
    RowElement.appendChild(NameElement);
    RowElement.appendChild(StreamElement);
    RowElement.appendChild(MarksElement);
    RowElement.appendChild(ButtonCell);
    
    //Adding Row to Table Body
    var element = document.getElementById("table-body");
    element.appendChild(RowElement);
    
}

//Edit Button Operation
function Edit( i ){
    //Getting the row 
    var RowElement = document.getElementById('row'+i)
    RowElement.innerHTML = '';

    //Save Button
    var SaveButton = document.createElement('input');
    SaveButton.setAttribute('type','button');
    SaveButton.setAttribute('onClick','Save('+i+')');
    SaveButton.setAttribute('value','Save');
    SaveButton.setAttribute('class','btn btn-primary');
    SaveButton.setAttribute('style',"margin-left: 20px;");

    //Delete Button
    var DeleteButton = document.createElement('input');
    DeleteButton.setAttribute('type','button');
    DeleteButton.setAttribute('onClick','Delete('+i+')');
    DeleteButton.setAttribute('value','Delete');
    DeleteButton.setAttribute('class','btn btn-danger');
    DeleteButton.setAttribute('style',"margin-left: 20px;");

    //Adding Buttons to cell (cell 6)
    var ButtonCell = document.createElement('td');
    ButtonCell.appendChild(SaveButton);
    ButtonCell.appendChild(DeleteButton);
    

    //Input Table cell 1
    var IdElement  = document.createElement('td');
    var IdInput = document.createElement('input');
    IdInput.setAttribute('type','text');
    IdInput.setAttribute('value',Data[i].Id);
    IdInput.setAttribute('Placeholder','Id');
    IdInput.setAttribute('id','input1');
    IdElement.appendChild(IdInput);

    //Input Table cell 2
    var NameElement  = document.createElement('td');
    var NameInput = document.createElement('input');
    NameInput.setAttribute('type','text');
    NameInput.setAttribute('value',Data[i].Name);
    NameInput.setAttribute('Placeholder','Name');
    NameInput.setAttribute('id','input2');
    NameElement.appendChild(NameInput);

    //Input Table cell 3
    var StreamElement  = document.createElement('td');
    var StreamInput = document.createElement('input');
    StreamInput.setAttribute('type','text');
    StreamInput.setAttribute('value',Data[i].Stream);
    StreamInput.setAttribute('Placeholder','Stream');
    StreamInput.setAttribute('id','input3');
    StreamElement.appendChild(StreamInput);

    //Input Table cell 4
    var MarksElement  = document.createElement('td');
    var MarksInput = document.createElement('input');
    MarksInput.setAttribute('type','text');
    MarksInput.setAttribute('value',Data[i].Marks);
    MarksInput.setAttribute('Placeholder','Stream');
    MarksInput.setAttribute('id','input4');
    MarksElement.appendChild(MarksInput);

    //Appending all cells to row
    RowElement.appendChild(IdElement);
    RowElement.appendChild(NameElement);
    RowElement.appendChild(StreamElement);
    RowElement.appendChild(MarksElement);
    RowElement.appendChild(ButtonCell);
}

//Delete Button Opeartion
function Delete(i){

    Data.splice(i,1);
    IterateData(Data);

}

//Save Button Opeartion
function Save(i){
    
    //Getting value from  input fields
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var input3 = document.getElementById('input3').value;
    var input4 = document.getElementById('input4').value;

    //Regex for Marks
    var Marks = /^\d+$/;
    boolMarks = Marks.test(input4);

    //Regex for Id
    var reId = /^\d+$/;
    boolId = reId.test(input1);

    //Validation Conditions
    if(!boolId){
        document.getElementById('input1').focus();
        alert("Please Provide Valid Data");
    }
    else if(!boolMarks){
        document.getElementById('input4').focus();
        alert("Please Provide Valid Data");
    }
    else{
        var test  = {
            "Id":parseInt(input1),
            "Name":input2,
            "Stream":input3,
            "Marks":parseInt(input4),
        }

        Data[i] = test;
        IterateData(Data);
    }
    
}

//Clear Button Operation
function Clear(){

    document.getElementById("search_by_id").value="";
    document.getElementById("search_by_name").value="";
    document.getElementById("search_by_stream").value="";
    document.getElementById("search_by_marks").value="";
    IterateData(Data);
    filterd_array=[];
}

//Search Button Opearation
function Search(){

    var Id = document.getElementById("search_by_id").value;
    var Name = document.getElementById("search_by_name").value;
    var Stream = document.getElementById("search_by_stream").value;
    var Marks = document.getElementById("search_by_marks").value;
    
    //Filter data
    filterd_array = Data.filter( val => (val.Id.toString().includes(Id)&&val.Name.includes(Name)&&val.Marks.toString().includes(Marks)&&val.Stream.includes(Stream)));

    IterateData(filterd_array);
}

//Sort table based On Direction;
function SortData(obj){
    var sort_direction;
    var cell_to_sort;
    obj.innerHTML=='\u2191'?sort_direction="up":sort_direction="down";
    cell_to_sort = obj.id;
    console.log(typeof Data[0][cell_to_sort])
    if(typeof Data[0][cell_to_sort] == "number"){
        if(filterd_array.length==0){
            sort_direction=="up"?
            Data.sort((arr,arr1)=>parseInt(arr[cell_to_sort]) - parseInt(arr1[cell_to_sort])):
            Data.sort((arr,arr1)=>parseInt(arr1[cell_to_sort]) - parseInt(arr[cell_to_sort]));
            IterateData(Data);
            sort_direction=="up"?obj.innerHTML = "&darr;":obj.innerHTML = "&uarr;";
        }
        else{
            sort_direction=='up'?
            filterd_array.sort((arr,arr1)=>parseInt(arr[cell_to_sort]) - parseInt(arr1[cell_to_sort])):
            filterd_array.sort((arr,arr1)=>parseInt(arr1[cell_to_sort]) - parseInt(arr[cell_to_sort]));
            IterateData(filterd_array);
            sort_direction=="up"?obj.innerHTML = "&darr;":obj.innerHTML = "&uarr;";
        }
    }
    else{
        if(filterd_array.length==0){
            sort_direction=="up"?
            Data.sort((arr,arr1)=>(arr[cell_to_sort] > arr1[cell_to_sort])?1:-1):
            Data.sort((arr,arr1)=>(arr[cell_to_sort] < arr1[cell_to_sort])?1:-1);
            IterateData(Data);
            sort_direction=="up"?obj.innerHTML = "&darr;":obj.innerHTML = "&uarr;";
        }
        else{
            sort_direction=='up'?
            filterd_array.sort((arr,arr1)=>(arr[cell_to_sort] > arr1[cell_to_sort])?1:-1):
            filterd_array.sort((arr,arr1)=>(arr[cell_to_sort] < arr1[cell_to_sort])?1:-1);
            IterateData(filterd_array);
            sort_direction=="up"?obj.innerHTML = "&darr;":obj.innerHTML = "&uarr;";
        }
    }
}
