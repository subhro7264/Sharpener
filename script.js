
var from=document.getElementById("form-head");

from.addEventListener("submit" ,saveLocalStroage);

function saveLocalStroage(e){
    e.preventDefault();
    const name=e.target.fullname.value;
    const email=e.target.emailId.value;
    const phoneNumber=e.target.PhoneNumber.value;
    const dateToCall=e.target.date_to_call.value;
   
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("date", dateToCall);
    
    
};