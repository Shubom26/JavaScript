// ClassList = Element property in javaScript used to interact with an element's list of classes (CSS classes) 
// Allows you to make teusable classes for many elements across your webpage. 

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass,newClass)
// contains()

// const myButton = document.getElementById("myBtn");

// const myH1 = document.getElementById("myH1");

// myButton.classList.add('enabled');

// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover", event=> {
//     // event.target.classList.add("hover");
//     event.target.classList.toggle("hover");
// })
// myButton.addEventListener("mouseout", event=> {
//     // event.target.classList.remove("hover");
//     event.target.classList.toggle("hover");
// })
// myH1.classList.add("enabled","hover")
// myButton.classList.add("enabled");
// myButton.addEventListener("click", event =>{ 

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent ="HEHE😄"
//     }
//     else{
//         event.target.classList.replace("enabled","disabled");
//     }    
// })

const buttons = document.querySelectorAll(".myBtn");
buttons.forEach(button => {
    button.classList.add("enabled")
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    })
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    })
});
buttons.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent = "Contains Disabled"
        }else{
           event.target.classList.replace("enabled","disabled"); 
        }


        
    })
});
