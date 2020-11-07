// const data = fetch('https://pokeapi.co/api/v2/pokemon/psyduck?fbclid=IwAR2SXA6x_cIrOKNdfahOrk9KZgUBrayOcgLH7jxwyKEilcHdHxwF4Zx5mK4')

// setTimeout(() => {
//     console.log(data);
// }, 5000);

// async function getData(){
//     const data2 = await fetch('https://pokeapi.co/api/v2/pokemon/psyduck?fbclid=IwAR2SXA6x_cIrOKNdfahOrk9KZgUBrayOcgLH7jxwyKEilcHdHxwF4Zx5mK4')
//     let dataDetail = await data2.json();

//     console.log(dataDetail);
// }
// getData();


//    let data = fetch('https://pokeapi.co/api/v2/pokemon/psyduck?fbclid=IwAR2SXA6x_cIrOKNdfahOrk9KZgUBrayOcgLH7jxwyKEilcHdHxwF4Zx5mK4')

// data
// .then(function(data){
//     let dataDetail = data.json()
//     dataDetail.then(function(dataDetail) {
//         console.log(dataDetail);
//     })
// })
// .catch(function(err){
//     console.log(err);
// })


let status = document.getElementById('status');



async function getData(){
    let data = await fetch('https://jsonplaceholder.typicode.com/posts')
    let dataJson = await data.json();

    for(let i = 0; i < 6; i++){
        let statusi = document.createElement('div');
        statusi.setAttribute('class','content');
        let titlei = document.createElement('div');
        titlei.setAttribute('class','titlei');

        let bodyi = document.createElement('div');
        bodyi.setAttribute('class','bodyi');

        titlei.textContent = dataJson[i].title;
        bodyi.textContent = dataJson[i].body;

        statusi.appendChild(titlei);
        statusi.appendChild(bodyi);
       status.appendChild(statusi);
    }
    // console.log(dataJson[0].title)
    
}
getData();





