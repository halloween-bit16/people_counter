//document.getElementById("count").innerText = 5

let count=0;
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")

function inc(){
    countEl.innerText = ++count;
}

function dec(){
    if(count > 0)
    countEl.innerText = --count;
}

function save(){
    let cs= " "+count+" -"
    saveEl.textContent +=cs
    countEl.textContent=0;
    count=0;
}