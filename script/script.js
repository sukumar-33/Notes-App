const container = document.querySelector(".container");

let h1 = document.createElement("h1");
h1.innerHTML = "Notes";
h1.className = "heading";

let headingImg  = document.createElement("img");
headingImg.src = "images/notes.png";
container.appendChild(h1).appendChild(headingImg);

let btn = document.createElement("button");
btn.className = "btn";
btn.innerHTML = "Add notes";
let buttonImg = document.createElement("img");
buttonImg.src = "images/edit.png";
container.appendChild(btn).appendChild(buttonImg);

let notesDiv = document.createElement("div");
notesDiv.className = "notesDiv";
container.appendChild(notesDiv);

const notesContainer = document.querySelector(".notesDiv");

const createBtn = document.querySelector(".btn");

let notes = document.querySelector(".input-box");

createBtn.addEventListener("click" , () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable" , "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
})  