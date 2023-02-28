
// var from = document.getElementById("form-head");

// from.addEventListener("submit", saveLocalStroage);

// function saveLocalStroage(e) {
//     e.preventDefault();
//     const name = e.target.fullname.value;
//     const phone = e.target.number.value;
//     const email = e.target.emailId.value;
//     const dateToCall = e.target.date_to_call.value;
//     const obj = {
//         name,
//         email,
//         phone,
//         dateToCall
//     }
//     localStorage.setItem(obj.name, JSON.stringify(obj))
//     showOnTheScreen(obj)
   
// }

// function showOnTheScreen(obj) {
//     const parantElement = document.getElementById("listOfItem");
//     const childElement = document.createElement("li");
//     childElement.textContent = childElement.textContent + `${obj.name } - ${obj.email}-${obj.dateToCall}-${obj.Phone}`;
//     parantElement.appendChild(childElement);

//     // const deleteBtn=document.createElement("button");
//     // deleteBtn.className = "delete";
//     // deleteBtn.appendChild(document.createTextNode("DELETE"));
//     // li.appendChild(deleteBtn);
//     // removeItem(e)
// };




// // parantElement.addEventListener("click", removeItem);
// // // delete
// // function removeItem(e) {
// //     if (e.target.classList.contains("delete")) {
// //         if (confirm("ARE YOU SURE ?")) {
// //             const li = e.target.parentElement;
// //             childElement.removeChild(li);
// //         }
// //     }
// // };


var from = document.getElementById("form-head");

from.addEventListener("submit", saveLocalStroage);

function saveLocalStroage(e) {
    e.preventDefault();
    const name = e.target.fullname.value;
    const phone = e.target.number.value;
    const email = e.target.emailId.value;
    const dateToCall = e.target.date_to_call.value;
    const obj = {
        name,
        email,
        phone,
        dateToCall
    }
    localStorage.setItem(obj.name, JSON.stringify(obj))
    showOnTheScreen(obj);

}

function showOnTheScreen(obj) {
    const parantElm = document.getElementById("listOfItem");
    const childElm = document.createElement("li");
    childElm.textContent = childElm.textContent + `${obj.name } - ${obj.email}-${obj.Phone}${obj.dateToCall}`;
   const deleteBtn=document.createElement("input");
   deleteBtn.type="button";
   deleteBtn.value="Delete";
   deleteBtn.onclick=()=>{
    localStorage.removeItem(obj.name)
    parantElm.removeChild(childElm)
   };
   const editBtn = document.createElement("input");
    editBtn.type="button"
    editBtn.value="Edit"
    editBtn.onclick=()=>{
        localStorage.removeItem(obj.name)
        parantElm.removeChild(childElm)
        document.getElementById("nameInputTag").value=obj.name
        document.getElementById("emailInputTag").value=obj.email
        document.getElementById("numberlInputTag").value=obj.number
        document.getElementById("datelInputTag").value=obj.dateToCall
        
       };

    childElm.appendChild(deleteBtn);
    childElm.appendChild(editBtn);
    parantElm.appendChild(childElm);
}
 
