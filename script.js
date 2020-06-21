var AllEmp = [];


function create_row(empRecord,index) {

    var arrEmpRecord = [];
    arrEmpRecord =  empRecord;

    var imagepath="";
    // MSA: ADDED - additional condition which will consider the small and all caps for the Jo title
    if(arrEmpRecord[2]=='Doctor' || arrEmpRecord[2]=='doctor' || arrEmpRecord[2]=='DOCTOR'){
        //alert("Doc")
        imagepath='/images/Doc.png' 
    }
    else if(arrEmpRecord[2]=='IT' || arrEmpRecord[2]=='It' || arrEmpRecord[2]=='it') {
        //alert("IT")
        imagepath='/images/IT_job.jpg'
    }
    else if(arrEmpRecord[2]=='Lawyer' || arrEmpRecord[2]=='lawyer' ||arrEmpRecord[2]=='LAWYER') {
        //alert("IT")
        imagepath='/images/Lawyer.jpg'
    }
    else if(arrEmpRecord[2]=='Teacher' || arrEmpRecord[2]=='TEACHER' || arrEmpRecord[2]=='teacher') {
        //alert("IT")
        imagepath='/images/Teacher.jpg'
    }
    else if(arrEmpRecord[2]=='Chef' || arrEmpRecord[2]=='CHEF' || arrEmpRecord[2]=='chef') {
        //alert("IT")
        imagepath='/images/Chef.jpg'
    }
    else if(arrEmpRecord[2]=='Nurse' || arrEmpRecord[2]=='nurse' || arrEmpRecord[2]=='NURSE') {
        //alert("IT")
        imagepath='/images/Nurse.jpg'
    }
    else if(arrEmpRecord[2]=='Engineer' || arrEmpRecord[2]=='engineer' || arrEmpRecord[2]=='ENGINEER') {
        //alert("IT")
        imagepath='/images/Engineer.jpg'
    }
    else if(arrEmpRecord[2]=='Pilot' || arrEmpRecord[2]=='pilot' || arrEmpRecord[2]=='PILOT') {
        //alert("IT")
        imagepath='/images/Pilot.jpg'
    }
    else if(arrEmpRecord[2]=='Police' || arrEmpRecord[2]=='police' || arrEmpRecord[2]=='POLICE') {
        //alert("IT")
        imagepath='/images/Police.jpg'
    }
    
    else {
        imagepath='/images/smiley.png'
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
