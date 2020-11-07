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

const project = document.getElementById("project");
const task = document.getElementById("task");
const timespend = document.getElementById("timespend");
const btnAdd = document.getElementById("btn");
const table = document.getElementById("table");

for (let i = 0; i < Timesheet.length; i++) {
    let trtd = `<tr><td>${Timesheet[i].project}</td><td>${Timesheet[i].task}</td>
    <td>${Timesheet[i].timespend}</td>
    <td><button  class="btn btn-danger del">X</button><button class="btn btn-success upd">U</button>
    </td></tr>`
    table.innerHTML += trtd;
    console.log(trtd);
    console.log(i);
}

// tạo biến chứa phần tử cần update temp
let temp;
table.onclick = function (event) {
    if (event.target.classList.contains("del")) {
        console.log(event.target.classList.contains("del"))
        event.target.parentElement.parentElement.remove();
    }

    if (event.target.classList.contains("upd")) {

        btnAdd.innerHTML = "Update";
        
        // biến chứa phần tử cần update
        temp = event.target.parentElement.parentElement;
        console.dir(temp);
        
        project.value = temp.children[0].outerText;
        task.value = temp.children[1].outerText;
        timespend.value = temp.children[2].outerText;

        btnAdd.onclick = function () {
            btnAdd.innerHTML = "Add";
            temp.children[0].innerText = project.value;
            temp.children[1].innerText = task.value;
            temp.children[2].innerText = timespend.value;
            console.log(temp);
            
            project.value = "";
            task.value = "";
            timespend.value = "";
        }
    }
}

btnAdd.onclick = function () {
 
    let trtd = `<tr><td>${project.value}</td><td>${task.value}</td>
    <td>${timespend.value}</td>
    <td><button  class="btn btn-danger del">X</button><button class="btn btn-success upd">U</button>
    </td></tr>`
    table.innerHTML += trtd;

    project.value = "";
    task.value = "";
    timespend.value = "";
}
