const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("content")

function addTask(){
    if (inputBox.value == ""){
        alert("Fill the detail.");
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    save();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    save();
});

function save(){
    localStorage.setItem("actions", listContainer.innerHTML);
}

function load(){
    listContainer.innerHTML = localStorage.getItem("actions");
}
load();