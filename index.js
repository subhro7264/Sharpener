
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

//FROM SUBMIT EVENT add

form.addEventListener("submit", addItem);

//ADD ITEAM 
function addItem(e) {
    e.preventDefault();
    //get input value
    var newIteam = document.getElementById("item").value;
    // create li element
    var li = document.createElement("li");
    // add class
    li.className = "list-group-item";
    //    add text node with input value
    li.appendChild(document.createTextNode(newIteam));
    // create delete button element
    var buttonBtn = document.createElement("button");

    // add class
    buttonBtn.className = "btn btn-danger btn-sm float-right delete";
    buttonBtn.appendChild(document.createTextNode("X"));
    // append button to li
    li.appendChild(buttonBtn);
    // append li to list
    itemList.appendChild(li);
    //  add edit button to the  newly creatred li 
    var editBtn = document.createElement("button");
    // add class
    editBtn.className = "btn btn-danger btn-sm float-right ";
    // add text to li
    editBtn.appendChild(document.createTextNode("Edit"));
    // append button to li
    li.appendChild(editBtn);
    // append li to list
    itemList.appendChild(li);

};

// var itemList=document.getElementById("items");
itemList.addEventListener("click", removeItem);
// delete
function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("ARE YOU SURE ?")) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
};