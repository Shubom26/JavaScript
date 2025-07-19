const orival=0;
let newval=orival;
document.getElementById(`myH2`).textContent =`${orival}`;
document.getElementById(`incre`).onclick = function(){
    newval++;
    document.getElementById(`myH2`).textContent =newval;
}
document.getElementById(`decre`).onclick = function(){
    newval--;
    document.getElementById(`myH2`).textContent =newval;
}
document.getElementById(`reset`).onclick = function(){
    newval=orival;
    document.getElementById(`myH2`).textContent =newval;
}
