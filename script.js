const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

const countval=document.querySelector(".count-value");

let taskCount=0;

const displayCount=(taskCount1)=>{
    
 countval.innerText=taskCount1;
};
function AddTask(){
    if(inputBox.value===''){
        alert("you mast write something");
    }
    else{
        let li =document.createElement("li");

        li.innerHTML=inputBox.value;
        taskCount=taskCount+1;
       

        displayCount(taskCount);
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        taskCount=taskCount-1;
        displayCount(taskCount);
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data1", taskCount); 
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
     
     
 var ss=localStorage.getItem("data1");
 var int1=parseInt(ss);
 taskCount=int1+0;
 console.log(taskCount);
 console.log(typeof taskCount);
    
 
 displayCount(int1);
listContainer.innerHTML=localStorage.getItem("data");
}
showTask();