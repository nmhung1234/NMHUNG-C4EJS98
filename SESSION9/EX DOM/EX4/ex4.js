let Timesheet = [
    {
        project: "Learn front-end",
        task: "Learn HTML",
        timespend: "6"
    },
    {
        project: "Learn front-end",
        task: "Learn CSS",
        timespend: "8"
    },
    {
        project: "Learn front-end",
        task: "Learn JS Variable and Data Types",
        timespend: "6"
    },
    {
        project: "Learn git",
        task: "Learn git basic",
        timespend: "2"
    }
]


let project = document.getElementById("project");
let task = document.getElementById("task");
let timespend = document.getElementById("timespend");
let btnAdd = document.getElementById("btn");
let table = document.getElementById("table");

for (let i = 0; i < Timesheet.length; i++) {
    let trtd = `<tr><td>${Timesheet[i].project}</td><td>${Timesheet[i].task}</td><td>${Timesheet[i].timespend}</td><td><button class = "del">X</button><button class = "upd">U</button></td></tr>`
    table.innerHTML += trtd;
    console.log(trtd);
    console.log(i);
}

// tạo biến chwua phần tử cần update aw
let aw;
table.onclick = function (event) {
    if (event.target.classList.contains("del")) {
        console.log(event.target.classList.contains("del"))
        event.target.parentElement.parentElement.remove();
    }
    if (event.target.classList.contains("upd")) {
        // biến chứa phần tử cần update
        aw = event.target.parentElement.parentElement;
        console.dir(aw);
        project.value = aw.children[0].outerText;
        task.value = aw.children[1].outerText;
        timespend.value = aw.children[2].outerText;
    }
}

btnAdd.onclick = function () {

    aw.children[0].innerText = project.value;
    aw.children[1].innerText = task.value;
    aw.children[2].innerText = timespend.value;
    console.log(aw);

    project.value = "";
    task.value = "";
    timespend.value = "";
}
