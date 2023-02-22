

/*Add a new li element without the same class Name
And try editing it with getelementsbyclassname 
and then by getelementbytagname*/

//with class name//
//   var li =document.getElementsByTagName("list-group-item");
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor="yellow";
// for (var i=0; i< li.length;i++){
//     li[i].style.backgroundColor ="pink";
// };

/*****if seclect with class name is not gonna work beacuse
 in new li we not define the class nanme********/

var li = document.getElementsByTagName("li");
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = "yellow";
// items.style.backgroundColor="#f4f4f4";  //gives error
for (var i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = "green";
};





