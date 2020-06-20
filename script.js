var AllEmp = [];

/* function populatetable(){
    var code_snipper = ""
    code_snipper += "<tr><td>Maria</td></tr>\n"
    code_snipper += "<tr><td>Sharmin</td></tr>\n"
    code_snipper += "<tr><td>Agbay</td></tr>\n"
    code_snipper += "<tr><th>Hello</th><th>Pilipinas</th><th>Kong</th><th>Mahal</th></tr>\n"
    code_snipper += "<tr></tr>\n"

    //var table = document.getElementById('my_table')
    var table = document.getElementsByTagName('table')[0]
    table.innerHTML += code_snipper

} */

function create_row(empRecord,index) {

    var arrEmpRecord = [];
    arrEmpRecord =  empRecord;

    //alert(arrEmpRecord[0]);
    //alert(arrEmpRecord[1]);
    
    var row = ""
    row += "<tr id='" + index + "'>\n"
    row += "<td onclick=index'remove_employee(" + index + ")'>❌</td>\n"
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
    //var name_input = document.querySelector('input')
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
    FName_input.value = ""
    LName_input.value = ""
    Job_input.value = ""
    Salary_input.value = ""
    refresh_table()
  }