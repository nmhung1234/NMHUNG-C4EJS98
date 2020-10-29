// const addbtn = document.getElementById("add-btn");
const todo = document.getElementById("todoo");

// addbtn.onclick = function(){
//     while(todo.value != "")
//     {
//         // Tạo thẻ li
//         let li = document.createElement("li");
//         //lấy values từ box chèn vào thẻ li
//         li.innerText = todo.value;
//         //chèn vào html
//         document.getElementById("todo-container").appendChild(li);
//         todo.value = "";
//     }
// }


// cách dùng mainform
const mainForm = document.getElementById("main-form");
let ul = document.getElementById("todo-container");

mainForm.onsubmit = function(event){
    event.preventDefault();
    while(mainForm.todoo.value != "")
    {
            // // b1: Tạo thẻ li
            // let li = document.createElement("li");

            // //b2: lấy values từ box chèn vào thẻ li
            // li.innerText = mainForm.todoo.value;

            // //b3.1 tạo button del
            // let btnDel = document.createElement("button");

            // // xóa task đi
            // btnDel.onclick = function(){
            //     btnDel.parentElement.remove();
            // }
            // console.log(btnDel);
            // //b3.2: chèn text cho btn
            // btnDel.innerText = "Delete";
           
            // //b3.3 chèn btnDel vào li
            // li.appendChild(btnDel);
            let todocontent = mainForm.todoo.value;
            let li = `<li class="abc">${todocontent}<button class="delete-btn">Delelte</button></li>`
            //b4: chèn vào thẻ ul muốn chèn
            
            // ul.appendChild(li);
            ul.innerHTML += li;
            mainForm.todoo.value = "";
    }
}
ul.onclick = function(event){
     if(event.target.classList.contains("abc")){
        if( event.target.style.textDecoration != "line-through"){
            event.target.style.textDecoration = "line-through"
        }
        
        else{
            event.target.style.textDecoration = "";
        }
     }
     if(event.target.classList.contains("delete-btn")){
        event.target.parentElement.remove();
     }
     
     
}