let phoneList = [
    {
        name: "Hung",
        phone: "0377127592",
    },
    {
        name: "Ray",
        phone: "0377127592",
    }
];
let contact = {};
let action;
let control = ['c', 'r', 'u', 'd', 'e'];
do{
    do{
        action= String(prompt("Enter your action C,R,U,D,E").toLowerCase());
    }while(control.indexOf(action) == -1)
    
    switch (action) {
        case 'c':
            {
                add();
                logout();
                break;
            }
        case 'r':
            {
                logout();
                break;
            }
    
        case 'u':
            {
                updateP();
                logout();
                break;
            }
    
        case 'd':
            {
                deleteP();
                logout();
                break;
            }
    }
}while(action != 'e')

function logout() {
    for (let people of phoneList)
        console.log(people.name, people.phone);
}
function add() {
    let name = String(prompt("Enter the name"));
    let phonenumber = String(prompt('Enter the phone number'));
    contact['name'] = name;
    contact['phone'] = phonenumber;
    phoneList.push(contact);
}
function updateP() {
    let updateInf = prompt("Enter your name you want to update");
    let newName = String(prompt("Enter your new name you want to update"));
    let newNumber = Number(prompt("Enter your number name you want to update"));
    for (let i = 0; i < phoneList.length; i++) {
        if (phoneList[i].name == updateInf) {
            phoneList[i].name = newName;
            phoneList[i].phone = newNumber;
        }
        else 
            alert("Your name is not exist to update!!");
        break;
    }

}
function deleteP() {
    let del = String(prompt("Enter your name you want to delete"));
    for (let i = 0; i < phoneList.length; i++) {
        if (phoneList[i].name == del) {
            phoneList.splice(i, 1);
        }
        else 
            alert("Your name is not exist to delete!!");
        break;
    }
}