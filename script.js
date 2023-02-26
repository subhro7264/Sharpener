
var from=document.getElementById("form-head");

from.addEventListener("submit" ,saveLocalStroage);

function saveLocalStroage(e){
    e.preventDefault();
     
    const obj={
    name:e.target.fullname.value,
     email:e.target.emailId.value,
     phoneNumber:e.target.PhoneNumber.value,
     dateToCall:e.target.date_to_call.value,
    };


    let obj_serialized=JSON.stringify(obj);
    localStorage.setItem("obj" , obj_serialized)
    // localStorage.setItem("name", name);
    // localStorage.setItem("email", email);
    // localStorage.setItem("phoneNumber", phoneNumber);
    // localStorage.setItem("date", dateToCall);
    
    
};