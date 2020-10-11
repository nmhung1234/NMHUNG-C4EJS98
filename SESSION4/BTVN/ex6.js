let processLearning = [
    {
        name: 'HTML',
        process: 'false',
    },
    {
        name: 'CSS',
        process: 'false',
    },
    {
        name: 'Basic of JavaScript',
        process: 'false',
    },
    {
        name: 'Node Package Manager',
        process: 'false',
    },
    {
        name: 'Git',
        process: 'false',
    },
];


let control = ['new', 'delete', 'update', 'complete'];
console.log('Hi there, this is your learning tasks to front-end developer career:');
print();
let cmm;
do {
    cmm = String(prompt("Enter your command (New, Delete, Update, Complete)").toLowerCase());
} while (control.indexOf(cmm) == -1);
switch (cmm) {
    case 'new':
        {
            add();
            print();
            break;
        }
    case 'update':
        {
            update();
            print();
            break;
        }
    case 'complete':
        {
            complete();
            print();
            break;
        }
    case 'delete':
        {
            deletee();
            print();
            break;
        }

}


function print() {
    for (let i = 0; i < processLearning.length; i++) {
        console.log(`${i + 1}. ${processLearning[i].name}`);
        console.log(`   Complete: ${processLearning[i].process}`);
    }
    console.log('----------------------------------------------');
}
function add() {
    let task = String(prompt('Enter new task:'));
    let taskPush = {};
    taskPush['name'] = task;
    taskPush['Complete'] = 'false';
    processLearning.push(taskPush);
}
function update() {
    let positionUpdate = Number(prompt("Enter position:"));
    let nameUpdate = String(prompt('Enter the name:'));
    processLearning[positionUpdate - 1].name = nameUpdate;
}
function complete(){
    let positionComplete = Number(prompt("Enter position:"));
    processLearning[positionComplete - 1].process = 'true';
}
function deletee(){
    let positionDeletee = Number(prompt("Enter position:"));
    processLearning.splice(positionDeletee - 1, 1);
}