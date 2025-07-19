// Step 1 CREATE THE ELEMENT 

const newH1 = document.createElement('h1');

// STEP 2 ADD ATTRIBUTES/PROPERTIES

newH1.textContent =`I Like pizza!`;
newH1.id="myH1";
newH1.style.color="tomato";
newH1.style.textAlign="center";

         
// STEP 3 APPEND ELELMENT TO DOM 

// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
document.getElementById("box1").prepend(newH1);
// const box2 = document.getElementById("box2");
// const boxes = document.querySelectorAll(".box");

// document.body.insertBefore(newH1,boxes[2]);
// const box1 = document.getElementsByClassName(".box");
// document.box1.append(newH1);
// document.insertBefore(newElement,currentElement);

// document.body.insertBefore(newH1, box2);

// REMOVE HTML ELEMENT 
//  document.body.removeChild(newH1);
 document.getElementById("box1").removeChild(newH1);