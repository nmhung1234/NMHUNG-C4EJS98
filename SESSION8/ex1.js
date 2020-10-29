let bt1 = document.getElementById('bt1');
let bt2 = document.getElementById('bt2');
let bt3 = document.getElementById('bt3');
let block1 = document.getElementById('block1');
let block2 = document.getElementById('block2');
let block3 = document.getElementById('block3');
let yes = document.getElementById('yes');
let no = document.getElementById('no');
bt1.onclick = function changeColor() {
    if(block1.style.backgroundColor != "black")
    {
        block1.style.backgroundColor = "black";
    }
    else
    block1.style.backgroundColor = "aquamarine";
   

}
bt2.onclick = function () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    //console.log(r);
    block2.style.backgroundColor = `rgb(${r},${g},${b})`;
}

let i = 0;
bt3.onclick = function () {
   
    if (i % 2 != 0) {
        block3.style.visibility = "hidden";
        i++;
    }
    else {
        block3.style.visibility = 'visible';
        i++;
    }
}

let counthover = 0;
yes.onmouseover = function yeshover() {
    yes.innerText = "Không";
    yes.onmouseleave = function () {
        yes.innerText = "Có"
    }
    counthover++;
    console.log(counthover);
    if(counthover > 4)
    {
        noti();
    }
}
no.onmouseover = function nohover() {
    no.innerText = "Có";
    no.onmouseleave = function () {
        no.innerText = "Không"
    }
    counthover++;
    if(counthover > 4)
    {
        noti();
    }
    
}
function noti() {
    alert("I Know");
    counthover = 0;
}

