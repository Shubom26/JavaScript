// ADD AN ELEMENT
const newButton = document.createElement("button");

newButton.textContent ="Button 5";
newButton.classList ="myButton";
document.body.appendChild(newButton);

let buttons = document.querySelectorAll(".myButton");

// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent = `abc`
// })

buttons.forEach(button =>{
    button.addEventListener("click",event => {
        event.target.style.backgroundColor = "red";
    })
})

buttons.forEach(button => {
    button.addEventListener("mouseover",event =>{
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)"
    })
})
buttons.forEach(button => {
    button.addEventListener("mouseout",event =>{
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)"
    })
})

// REMOVE ELEMENT 
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButton");
        console.log(buttons);
    });
    
})