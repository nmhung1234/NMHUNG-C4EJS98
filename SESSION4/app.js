// let movie = {
//     title: 'The dark night rises',
//     year: 2012,
//     rate: 8.4

// };

// let inp = prompt("What you want to know");

// if(movie[inp] == null || movie[inp] == undefined)
// {
//     alert(`'${inp}' is not exits in our data`)
// }
// else
// alert(movie[inp]);

// // update
// let propUpdate = prompt("What do you want to update");
// let valUpdate = prompt("What is the update");
//  movie[propUpdate] = valUpdate;
// console.log(movie);


//create


// let inp = prompt("What you want to update");
// let valUpdate;
// if(movie[inp] == null || movie[inp] == undefined)
// {
//     alert(`'${inp}' is not exits in our data, we will add new`);
//     valUpdate = prompt("Enter Your data");
//     movie[inp] = valUpdate; 
// }
// else
// alert(`'${inp}' is exits. We cant add new`);
// console.log(movie);


///Array of Objects
let movies = [
    {
        Title: 'Rom',
        year: 2020,
        rate: 5.2,
    },
    {
        Title: 'TENET',
        year: 2020,
        rate: 8,
    },
    {
        Title: 'Attack on Titans',
        year: 2016,
        rate: 9,
    },
    {
        Title: 'Spider Man',
        year: 2010,
        rate: 7,
    },
];

console.log(movies[0]);
console.log(movies[movies.length-1]);

// for ( let movie in movies)
// console.log(movie.Title, movie.year, movie.rate);

for(let i = 0; i < movies.length; i++)
{
    console.log('--------------');
    console.log(movies[i].Title);
    console.log(`Year: ${movies[i].year}`);
    console.log(`Rate: ${movies[i].rate}`);
}
let namemovie = prompt("Enter your name of movie");
let casts = prompt("Enter your name of characters");
for(let  i = 0; i < movies.length; i++){
    movies[i].rate += 0.7;
}
console.log("After increase rate ");
for(let i = 0; i < movies.length; i++)
{
    console.log('--------------');
    console.log(movies[i].Title);
    console.log(`Year: ${movies[i].year}`);
    console.log(`Rate: ${movies[i].rate}`);
}