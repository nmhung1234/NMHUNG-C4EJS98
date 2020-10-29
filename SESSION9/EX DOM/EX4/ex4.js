let project = document.getElementById("project");
let task = document.getElementById("task");
let timespend = document.getElementById("timespend");
let btnAdd = document.getElementById("btn");
let table = document.getElementById("table");

btnAdd.onclick = function () {
    let trtd = `<tr><td>${project.value}</td><td>${task.value}</td><td>${timespend.value}</td><td><button class = "del">X</button></td></tr>`
    table.innerHTML += trtd;
    let count = 1;
    table.onclick = function(event){
        if(event.target.classList.contains("del"))
        {
            console.log(event.target.classList.contains("del"))
            event.target.parentElement.parentElement.remove();
            console.log(count++);
        }
    }
}
