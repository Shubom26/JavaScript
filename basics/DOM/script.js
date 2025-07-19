// const heading= document.getElementById(`myHeading`);

// const fruits = document.getElementsByClassName(`fruits`);
// console.log(fruits);
// fruits[1].style.backgroundColor=`yellow`;

// for(let fruit of fruits){
//     fruit.style.color=`red`
// }


// function change(){
//     heading.textContent=`heading changed`;

// }

// const h4elements= document.getElementsByTagName(h4);
// heading.textContent=`${h4elements}`;
// document.querySelector() returns the first element or null 

// document.querySelectorAll() Returns a nodelist 

// const element=document.getElementById("deserts");
// const firstChild=element.firstElementChild;
// firstChild.style.backgroundColor="red";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement =>{
//     const firstChild= ulElement.firstElementChild;
//     firstChild.style.backgroundColor="yellow";
// })

// ulElements.forEach(ulElement =>{
//     const lastChild= ulElement.lastElementChild;
//     lastChild.style.backgroundColor="red";
// })

// ulElements.forEach(ulElement=> {
//     const lastChild= ulElement
// })

// const element = document.getElementById("pie");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor="green";

// const previousSibling = element.previousElementSibling;

// previousSibling.style.backgroundColor="red";

// const element= document.getElementById("apple");
// const parent= element.parentElement;
// parent.style.backgroundColor="yellow"

const element = document.getElementById("fruits");

const children = element.children;

console.log(children);
Array.from(children).forEach(child => {
    child.style.backgroundColor="yellow"
})