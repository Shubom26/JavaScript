const myBtn = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

// myBtn.addEventListener("click", event => {
//     if (myImg.style.display === "none") {
//         myImg.style.display = "block";
//         myBtn.textContent = "Hide"
//     }
//     else {
//         myImg.style.display = "none";

//         myBtn.textContent = "Show";
//     }
//     // This doesn't reserves space for the image 
// })

myBtn.addEventListener("click", event => {
    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myBtn.textContent = "Hide";
    }
    else{
        myImg.style.visibility = "hidden";
        myBtn.textContent = "Show";
    }
})
