let randomNumber = Math.floor(Math.random() * 10);
let input = document.querySelector('input');
let button = document.querySelector('.button');
let count = 0;

button.onclick = function () {
    if (0 > input || input > 10) {
        alert("Bạn đã nhập sai khoảng dữ liệu");
        count = 0;
    }
    else {
        if (input.value != randomNumber) {
            input.value = "";
            alert("Số bạn nhập không chính xác, mời nhập lại!");

            if (count >= 3) {
                alert("bạn đã nhập quá số lần!");
                alert(`Số đúng là ${randomNumber}`);
            }

        }
        else {
            alert("Bạn đã nhập đúng!");
            count = 0;
        }
    }
    count++;
}


