let up = document.getElementById("up");
let down =  document.getElementById("down");
let number = (document.getElementById("number"));
console.log(typeof number);
let numShow = 0;
up.onclick = function(){

    number.innerText = numShow +=1;
}
down.onclick = function(){

    number.innerText = numShow -=1;
}