 // Dom 
// EXAMINE THE DOCUMENT OBJECT
// console.dir(document);

// console.log(document.domain);
// console.log(document.url);
// console.log(document.title);
// console.log(document.domain);
// // document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent="Hello";

// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// console.log(document.getElementById("header-title"))

// var headerTitle=document.getElementById("header-title");
// var header=document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent='hello';
// headerTitle.innerText= "Goodbye";
// console.log(headerTitle.innerText);

// headerTitle.innerHTML="<h3>Hello</h3>";
// headerTitle.style.borderBottom="solid 3px #000"
// header.style.borderBottom="solid 3px #000"


// Now make ADD ITEM bold and chage the font color to greeen

/*var ad=document.getElementById("title");
ad.style.fontVariant ="small-caps";
ad.style.color="green";*/
//GETELEMENTBYCLASSNAME

// var items =document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent="hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor="yellow";
// // items.style.backgroundColor="#f4f4f4";  //gives error
// for (var i=0; i< items.length;i++){
//     items[i].style.backgroundColor ="pink";
// };

//  get elementby tag nanme
// var li =document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent="hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor="yellow";
// // items.style.backgroundColor="#f4f4f4";  //gives error
// for (var i=0; i< li.length;i++){
//     li[i].style.backgroundColor ="pink";
// };


/*Make the 3 rd element in the list have green background color
Make all the elements in the list have bold color font*/
var items =document.getElementsByClassName("list-group-item");
items[2].style.fontWeight = "bold";
for (var i=0; i< items.length;i++){
      items[2].style.backgroundColor ="green";
    };









