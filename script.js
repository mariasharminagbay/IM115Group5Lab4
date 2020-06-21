var AllEmp = [];


function create_row(empRecord,index) {

    var arrEmpRecord = [];
    arrEmpRecord =  empRecord;

    var imagepath="";
    //ISHARA : added condition with job options e.g. Chef; Engineer; Pilot; Police
    // MSA: ADDED - additional condition which will consider the small and all caps for the Jo title
    //MSA: get first image path
    imagepath = getEmpPhoto(arrEmpRecord[2])

    var row = ""
    row += "<tr id='" + index + "'>\n"
    row += "<td onclick='remove_person(" + index + ")'><img src='/images/delete.jpg' alt='Delete' style='width:35px;height:30px;'></td>\n"
    row += "<td><img src='" + imagepath + "' alt='Position' style='width:35px;height:30px;'>"  + "</td>\n"
    row += "<td>" + arrEmpRecord[0] + "</td>\n"
    row += "<td>" + arrEmpRecord[1] + "</td>\n"
    row += "<td>" + arrEmpRecord[2] + "</td>\n"
    row += "<td>" + arrEmpRecord[3] + "</td>\n"
    row += "</tr>"
    return row
}


function refresh_table(){
    var code_snippet = ""

    for(var i=0; i < AllEmp.length; i++)
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
    
    var FName_input = document.getElementById("FName").value;
    var LName_input = document.getElementById("LName").value;
    var Job_input = document.getElementById("Job").value;
    var Salary_input = document.getElementById("Salary").value;
    
    people[0] = FName_input;
    people[1] = LName_input;
    people[2] = Job_input;
    people[3] = Salary_input;
   
    AllEmp.push(people);

    document.getElementById("Photo").value = ""
    document.getElementById("FName").value = ""
    document.getElementById("LName").value = ""
    document.getElementById("Job").value = ""
    document.getElementById("Salary").value = "" 
    
    refresh_table()
    document.getElementById("FName").focus();

  }

  function getEmpPhoto(EmpJob){
    var path=""
    if(EmpJob=='Doctor' || EmpJob=='doctor' || EmpJob=='DOCTOR'){
        //alert("Doc")
        return path='/images/Doc.png' 
    }
    else if(EmpJob=='IT' || EmpJob=='It' || EmpJob=='it') {
        //alert("IT")
        return path='/images/IT_job.jpg'
    }
    else if(EmpJob=='Lawyer' || EmpJob=='lawyer' ||EmpJob=='LAWYER') {
        //alert("IT")
        return path='/images/Lawyer.jpg'
    }
    else if(EmpJob=='Teacher' || EmpJob=='TEACHER' || EmpJob=='teacher') {
        //alert("IT")
        return path='/images/Teacher.jpg'
    }
    else if(EmpJob=='Chef' || EmpJob=='CHEF' || EmpJob=='chef') {
        //alert("IT")
        return path='/images/Chef.jpg'
    }
    else if(EmpJob=='Nurse' || EmpJob=='nurse' || EmpJob=='NURSE') {
        //alert("IT")
        return path='/images/Nurse.jpg'
    }
    else if(EmpJob=='Engineer' || EmpJob=='engineer' || EmpJob=='ENGINEER') {
        //alert("IT")
        return path='/images/Engineer.jpg'
    }
    else if(EmpJob=='Pilot' || EmpJob=='pilot' || EmpJob=='PILOT') {
        //alert("IT")
        return path='/images/Pilot.jpg'
    }
    else if(EmpJob=='Police' || EmpJob=='police' || EmpJob=='POLICE') {
        //alert("IT")
        return path='/images/Police.jpg'
    }
    
    else {
        return path='/images/smiley.png'
    }
  
}
