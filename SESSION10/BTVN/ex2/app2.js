// let data = fetch('https://jsonplaceholder.typicode.com/comments');
// async function fetch2(){
//     console.log('Connecting...');
//     let dataJson = (await data).json();
//     console.log('Connected');
//     console.log(dataJson);
// }
// fetch2();

let data = fetch('https://jsonplaceholder.typicode.com/comments');
data
.then(success => {
    let dataJson  = success.json()
    .then(success => {

        console.log(dataJson);
    });
    console.log('Connected');
    // console.log(dataJson);
})

