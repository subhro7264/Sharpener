
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
    showOnTheScreen(obj)

}

function showOnTheScreen(obj) {
    const parantElement = document.getElementById("listOfItem");
    const childElement = document.createElement("li");
    childElement.textContent = childElement.textContent + `${obj.name } - ${obj.email}-${obj.Phone}${obj.dateToCall}`;
    parantElement.appendChild(childElement);

};