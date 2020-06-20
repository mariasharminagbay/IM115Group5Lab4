var AllEmp = [];


function create_row(empRecord,index) {

    var arrEmpRecord = [];
    arrEmpRecord =  empRecord;
  
    var row = ""
    row += "<tr id='" + index + "'>\n"
    row += "<td onclick=index'remove_person(" + index + ")'><img src='/images/delete.jpg' alt='Delete' style='width:35px;height:30px;'></td>\n"
    //<img src='/images/delete.jpg' alt='Delete' style='width:35px;height:30px;'>
    row += "<td>" + arrEmpRecord[1] + "</td>\n"
    row += "<td>" + arrEmpRecord[2] + "</td>\n"
    row += "<td>" + arrEmpRecord[3] + "</td>\n"
    row += "<td>" + arrEmpRecord[1] + "</td>\n"
    row += "<td>" + arrEmpRecord[3] + "</td>\n"
    row += "</tr>"
    alert(row)
    return row
}

function refresh_table(){
    alert('HellorefreshTable')
    var code_snippet = ""
/*     array.forEach(element => {
        
    }); */
    alert(AllEmp.length);
    alert(AllEmp[0])
    for(var i=0; i < AllEmp.length; i++)
        //alert("for each person: " + AllEmp[i],i);
      code_snippet += create_row(AllEmp[i],i)
  
    var table = document.querySelector('#my_table')
    table.innerHTML = code_snippet 
  }

  function remove_person(index){
    people.splice(index, 1)
    refresh_table()
  }
  
  function onEnterUp(event) {
    var people =[];
    if (event.code !== 'Enter') return;
    
    alert('Hello');
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
    //var allInput = document.querySelector("tr.txtInput")
    //allInput.value = ""
  }