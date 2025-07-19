const newListItem = document.createElement("li");

newListItem.textContent="Coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight="bold";
newListItem.style.backgroundColor = "green";

// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);
// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem,orange);

const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem,listItems[1]);
document.getElementById("fruits").removeChild(newListItem);
