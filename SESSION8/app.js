// // funtion
// function myFuntion(){


//     //logic
//     console.log("Hello world");

// }

// // call funtion
// let a = myFuntion();
// console.log(a);


// //tinh dien tich tam giac khi biet duwong cao va canh huyen
// function caculate(a,h){
//     let s = (a*h)/2;
//     return s;
// };
// console.log(caculate(3,4))


// // phương thức (method)

// let person =  {
//     name: 'ray',
//     age: 18,
//     sayHello: function (name) {
//         console.log(`hello ${name}`);
//     },
//     introduce: function () {
//         console.log(`hello, my name is ${this.name}`);
//     }
// };

// //  từ khóa this 



// [1,2,3].map(function() {

    
// })

// //DOM: document object model

let app = document.getElementById("app");
// console.log(app);
// console.dir(app);
// // // class name
// // // Tag name
// // let app2 = document.getElementsByClassName("app2");
// // console.log(app2);

// // let apps = document.getElementsByTagName("div");
// // console.log(apps);

// // // # . query

// // let app3 = document.querySelectorAll(".app2");
// // console.log(app3);
// console.log(app.innerHTML);
// app.innerHTML = `<h1>abc</h1>`;
// console.log(app.innerText);
// app.innerText = `<h1>def</h1>`;
// console.log(app.textContent);

// //style

// console.log(app.style.backgroundColor);
// app.style.backgroundColor = "red";
// let ul = document.getElementById("todo-list");
// console.log(ul.children[0].parentElement.parentElement);
// // laay ra id
// console.log(ul.id);
// ul.classList.add("todo4")
// console.log(ul.classList);


//create element()
//appendchild(), remove()
// const ul = document.getElementById('todo-list');
// console.log(ul);


// let li = document.createElement('li');
// console.log(li);
// li.innerText = 'Học bài'
// console.log(li);
// ul.appendChild(li);
// ul.children[0].remove();


// Event Click
console.log(app);
app.onclick = function alertHello(){
    alert("hello");

}