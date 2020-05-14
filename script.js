var input = document.getElementById("userinput");
var button = document.getElementById("button");
var ul = document.querySelector("ul");
var list = document.querySelector("li");


function inputlength(){
    return input.value.length;
};


function addListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; 

// excerise 3: part 1: create delete btn
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("Delete"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", function(evt){
        evt.target.parentNode.remove();
    });
};

function addListAfterClick(){
    if(inputlength() > 0){
        addListElement();
     }  
}

function addListAfterKeypress(event){
    if(inputlength() > 0 && event.keyCode === 13){
        addListElement();
    }  
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);



// excerise 1: 

var liCollection = document.querySelectorAll("li"),i;
//get list collection
for(var i=0; i < liCollection.length; i++){
    const li=liCollection[i]
    li.addEventListener("click", ()=>{
    li.classList.toggle("done");
    })
};

// excerise 2: 

var btns = document.getElementsByClassName("deleteitem");
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click", function(e){
        const li=e.target.parentNode
        li.remove()
    });
}

// excerise 3, part 2:

function listLength(){
    return list.length;
}

function deleteButton(){
    var btn=document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    list[i].appendChild(btn);
    btn.onclick=removeParent; 
}

function removeParent(evt){
    evt.target.parentNode.remove();
};

for(var i=0; i< listLength; i++){
    deleteButton();
}

