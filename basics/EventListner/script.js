const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");

// function changeColor(event) {
//     event.target.style.color = "white";
//     event.target.style.backgroundColor = "#ac0909";
//     event.target.textContent="Coca-Cola"
//     event.target.style.fontFamily="'Georgia', serif"
    
// }

// myBox.addEventListener("click", changeColor);

// myBox.addEventListener("click",event=>{
//     event.target.style.color = "white";
//     event.target.style.backgroundColor = "#ac0909";
//     event.target.textContent="Coca-Cola"
//     event.target.style.fontFamily="'Georgia', serif"

// });

// myBox.addEventListener("mouseover", event=>{
//     event.target.style.color = "white";
//     event.target.style.backgroundColor = "#e50914";
//     event.target.textContent="Netflix"
//     event.target.style.fontFamily=" serif";
//     event.target.style.display = "flex";
//     event.target.style.alignItems = "center";
//     event.target.style.justifyContent = "center";
// });

// myBox.addEventListener("mouseout",event=>{
//      event.target.style.color = "black";
//     event.target.style.backgroundColor = "rgb(20, 231, 20)";
//     event.target.textContent = "Click Me 😒";
//     event.target.style.fontFamily = "Arial, Helvetica, sans-serif";
// });


myBtn.addEventListener("click",()=>{
    myBox.style.color = "white";
    myBox.style.backgroundColor = "#ac0909";
    myBox.textContent="Coca-Cola"
    myBox.style.fontFamily="'Georgia', serif"

});

myBtn.addEventListener("mouseover", ()=>{
    myBox.style.color = "white";
    myBox.style.backgroundColor = "#e50914";
    myBox.textContent="Netflix"
    myBox.style.fontFamily=" serif";
    myBox.style.display = "flex";
    myBox.style.alignItems = "center";
    myBox.style.justifyContent = "center";
});

myBtn.addEventListener("mouseout",()=>{
     myBox.style.color = "black";
    myBox.style.backgroundColor = "rgb(20, 231, 20)";
    myBox.textContent = "Spotify";
    myBox.style.fontFamily = "Arial, Helvetica, sans-serif";
})