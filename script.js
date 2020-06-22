var AllEmp = []; // this variable will be used to store the all the people/employees that will be inputted in the table


function onEnterUp(event) {
    var people =[];  // this will be used as an array of information for the row or the single information entered.
    if (event.code !== 'Enter') return;

    people[0] = document.getElementById("FName").value;     //First Name
    people[1] = document.getElementById("LName").value;     //Last Name
    people[2] = document.getElementById("Job").value;       //Job Title
    people[3] = document.getElementById("Salary").value;    //Salary
   
    AllEmp.push(people);  

    refresh_table() // this will call the method that will populate the table based on the records in All Emp array

    //clear the text 
    document.getElementById("Photo").value = ""
    document.getElementById("FName").value = ""
    document.getElementById("LName").value = ""
    document.getElementById("Job").value = "IT"
    document.getElementById("Salary").value = "" 
    document.getElementById("FName").focus();

  }

  
function refresh_table(){
    // In this method, the table will be populated based on the records of AllEmp array with the help of create_row method.
    var code_snippet = ""  

    for(var i=0; i < AllEmp.length; i++)  // this for loop will iterate ont eh AllEmp array and passed all the records to create_row method
      code_snippet += create_row(AllEmp[i],i)  
  
    var table = document.querySelector('#my_table')  
    table.innerHTML = code_snippet   

}

function create_row(empRecord,index) {
    // this methos accepts the parameters empRecord which represents the row in the AllEmp Record and index as the index of the that particular row in AllEmp array
    var arrEmpRecord = [];  
    arrEmpRecord =  empRecord;  

    var imagepath="";  
    imagepath = getEmpPhoto(arrEmpRecord[2])  // call the getEmpPhoto to get the image or logo path path;
    var row = ""  // the variable row serves as a string variable where the generated html code are concatenated and will be stored.
    row += "<tr id='" + index + "'>\n"
    row += "<td onclick='remove_person(" + index + ")'><img src='/images/delete.jpg' alt='Delete' style='width:35px;height:30px;'></td>\n"
    row += "<td><img src='" + imagepath + "' alt='Position' style='width:35px;height:30px;'>"  + "</td>\n"
    row += "<td>" + arrEmpRecord[0] + "</td>\n"  // FirstName
    row += "<td>" + arrEmpRecord[1] + "</td>\n" //LastName 
    row += "<td>" + arrEmpRecord[2] + "</td>\n" //Job Title that was selected
    row += "<td>" + arrEmpRecord[3] + "</td>\n" //Salary
    row += "</tr>"
    return row  // return the value or the htmlcode generated
}

function remove_person(index){
    AllEmp.splice(index, 1)  // the splice method adds/removes items to/from an array and returns the removed items;
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
