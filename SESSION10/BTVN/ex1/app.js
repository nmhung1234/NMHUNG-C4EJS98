// cách 1:


let promise = new Promise(

    function(resolve, reject){
        resolve(
            setTimeout(() => {
                console.log('Promise is da bezt')
            }, 5000)
        )
        reject('Error')
    }
)
promise
.then( success =>{
    
})
.catch( err => {
    console.log(err);
})

// cách 2 dùng async await

async function callsync(){
    await setTimeout(() => {
        console.log('Promise is da bezt')
    }, 5000)
}
callsync();