var AllEmp = []; // this variable will be used to store the all the people/employees that will be inputted in the table


function onEnterUp(event) {
    var people =[];  // this will be used as an array of information for the row or the single information entered.
    if (event.code !== 'Enter') return;

    // start populating the people array by getting the values through the ElementId
    people[0] = document.getElementById("FName").value;     //First Name
    people[1] = document.getElementById("LName").value;     //Last Name
    people[2] = document.getElementById("Job").value;       //Job Title
    people[3] = document.getElementById("Salary").value;    //Salary
   
    AllEmp.push(people);  //After populating the people array, all the values will be inserted of pushed to the Employee's array to be consumed by the table.html

    refresh_table() // this will call the method that will do the uopdate on the table

    //After populating the table with the new data, clear the text 
    document.getElementById("Photo").value = ""
    document.getElementById("FName").value = ""
    document.getElementById("LName").value = ""
    document.getElementById("Job").value = "IT"
    document.getElementById("Salary").value = "" 
    document.getElementById("FName").focus();

  }

  
function refresh_table(){
    var code_snippet = ""  // this will be used as a temporary variable to store whatever html code  that will be created or generated at create_row function

    for(var i=0; i < AllEmp.length; i++)
      code_snippet += create_row(AllEmp[i],i)
  
    var table = document.querySelector('#my_table')
    table.innerHTML = code_snippet 
}

function create_row(empRecord,index) {

    var arrEmpRecord = [];
    arrEmpRecord =  empRecord;

    var imagepath="";
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

function remove_person(index){
    AllEmp.splice(index, 1)
    refresh_table()
  }

function getEmpPhoto(EmpJob){
    var path=""
    if(EmpJob=='Doctor'){
        return path='/images/Doc.png' 
    }
    else if(EmpJob=='IT') {
        //alert("IT")
        return path='/images/IT_job.jpg'
    }
    else if(EmpJob=='Lawyer') {
        //alert("IT")
        return path='/images/Lawyer.jpg'
    }
    else if(EmpJob=='Teacher') {
        //alert("IT")
        return path='/images/Teacher.jpg'
    }
    else if(EmpJob=='Chef') {
        //alert("IT")
        return path='/images/Chef.jpg'
    }
    else if(EmpJob=='Nurse') {
        //alert("IT")
        return path='/images/Nurse.jpg'
    }
    else if(EmpJob=='Engineer') {
        //alert("IT")
        return path='/images/Engineer.jpg'
    }
    else if(EmpJob=='Pilot') {
        //alert("IT")
        return path='/images/Pilot.jpg'
    }
    else if(EmpJob=='Police') {
        //alert("IT")
        return path='/images/Police.jpg'
    }
    else {
        return path='/images/smiley.png'
    }
  
}
