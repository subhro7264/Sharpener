
/***** Deliverable****/
/*------Make the 2nd item have green background color.---
*/
var secondChild= document.querySelectorAll("li");
for (var i = 0; i <  secondChild.length; i++) {
 secondChild[1].style.backgroundColor = "green";
  }

  /*----Make the 3rd item invisible-----*/
  var secondChild= document.querySelectorAll("li");
for (var i = 0; i <  secondChild.length; i++) {
 secondChild[2].style.visibility = "hidden";
  };

/***** Deliverable****/
/*Using QuerySelectorALL change the font color to green for 
2nd item in the item list*/

var secondChild = document.querySelectorAll("li");
for (var i = 0; i < secondChild.length; i++) {
  secondChild[1].style.color = "green";
};

/*Choose all the odd elements and make
 their background green using QuerySelectorALL﻿*/ 

var odd= document.querySelectorAll("li:nth-child(odd)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
  
}

