var pending=0;
var completed=0;
var count=0;
var color=0;
let array = {};
const btnAdd = document.querySelector("todoAddBtn");

function addFun(){
    let inputValue = document.getElementById("todoText").value;
    if(inputValue==""){
        return;
    }
    else{
        //Information Display
        count = document.getElementById("todoDisplay").childElementCount;
        let name = document.getElementById("todoText").value;
        let box = document.getElementById("todoDisplay");
        let li = document.createElement("li"); //Creating new li
        let a = document.createElement("button");
        // a.textContent="X";
        // a.href="javascript:void(0)";
        // a.className="remove";
        // a.onclick="removeFun()";
        li.textContent= name;

        //Done Button
        let done = document.createElement("button");
        done.textContent="\u2713";
        done.className="mark";
        // done.onclick=completeFun();
        // done.
        li.id=(++color);

        //Append Child
        li.appendChild(done);
        // li.appendChild(a);
        box.appendChild(li);
        li.className="unfinished";
        // console.log(li.id);
        document.getElementById("total").innerHTML = ++count;
    }
    document.getElementById("todoText").value="";
  
}

function removeFun(removeID){
    let strk = document.createElement("strike");
    console.log(strk);
}

let butt = addEventListener("click",function(e){
    let box = document.getElementById("todoDisplay");
    let li = e.target.parentNode;
    box.removeChild(li);
    this.document.getElementById("total").innerHTML=(--count);
    
});


