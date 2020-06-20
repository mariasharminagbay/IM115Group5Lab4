var AllEmp = [];


function create_row(empRecord,index) {

    var arrEmpRecord = [];
    arrEmpRecord =  empRecord;

    var imagepath="";
    //alert(arrEmpRecord[2]);
    if(arrEmpRecord[2]=='Doctor') {
        //alert("Doc")
        imagepath='/images/Doc.png'
    }
    else if(arrEmpRecord[2]=='IT') {
        //alert("IT")
        imagepath='/images/IT.png'
    }
  
    var row = ""
    row += "<tr id='" + index + "'>\n"
    row += "<td onclick='remove_person(" + index + ")'><img src='/images/delete.jpg' alt='Delete' style='width:35px;height:30px;'></td>\n"
    row += "<td><img src='" + imagepath + "' alt='Position' style='width:35px;height:30px;'>"  + "</td>\n"
    row += "<td>" + arrEmpRecord[0] + "</td>\n"
    row += "<td>" + arrEmpRecord[1] + "</td>\n"
    row += "<td>" + arrEmpRecord[2] + "</td>\n"
    row += "<td>" + arrEmpRecord[3] + "</td>\n"

    row += "</tr>"
    //alert(row)
    return row
}

function refresh_table(){
    //alert('HellorefreshTable')  -- for testing
    var code_snippet = ""

    //alert(AllEmp.length);
    //alert(AllEmp[0])
    for(var i=0; i < AllEmp.length; i++)
        //alert("for each person: " + AllEmp[i],i);  -- -- for testing
      code_snippet += create_row(AllEmp[i],i)
  
    var table = document.querySelector('#my_table')
    table.innerHTML = code_snippet 
  }

  function remove_person(index){
    AllEmp.splice(index, 1)
    refresh_table()
  }
  
  function onEnterUp(event) {
    var people =[];
    if (event.code !== 'Enter') return;
    
    //alert('Hello'); -- for testing
    var FName_input = document.getElementById("FName").value;
    var LName_input = document.getElementById("LName").value;
    var Job_input = document.getElementById("Job").value;
    var Salary_input = document.getElementById("Salary").value;
    
    //alert(FName_input);for testing
    //alert(LName_input);for testing
  
    people[0] = FName_input;
    people[1] = LName_input;
    people[2] = Job_input;
    people[3] = Salary_input;
   
    //alert(people.length);
    AllEmp.push(people);
 
    //alert(AllEmp.length);
    //alert(AllEmp[0])
    document.getElementById("Photo").value = ""
    document.getElementById("FName").value = ""
    document.getElementById("LName").value = ""
    document.getElementById("Job").value = ""
    document.getElementById("Salary").value = "" 
    
    refresh_table()
    document.getElementById("FName").focus();

  }