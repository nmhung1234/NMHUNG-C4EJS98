// console.log("Hello World");

// Khai báo biến
// var, let, const


let name = "Hung";
name = "Nguyen Hung";
console.log('Ten minh la: ' + name);


// lấy - Nhập đầu vào
let userName = prompt("Nhap ten cua nguoi Anh Em deee :D : ")
console.log("Ten nguoi anh em là: " + userName)


/// Ex1: cho người dùng nhập 2 số a,b. In ra tổng 2 số

let a = prompt("Nhap so A: ");
let b = prompt("Nhap so B: ");
let tong = Number(a) + Number(b);
console.log("Tong a va b la: " + tong);
let hieu = parseInt(a) - parseInt(b);
console.log("Hieu a va b la: " + hieu);

/// kiểu dữ liệu 
// primative (Nguyeen thuy)
//string, number, boolen (true/false)
// object (doi tuong)
// array, object, funtion


//string
let ten = "Hung";
let age = '20';
let dob = `12/10/2000
            hahah`; // template string - cho xuống dòng viết thoải mái
console.log(ten);
console.log(age);
console.log(dob);

/// concat - Nối Chuỗi 
let randomstring = "Toi ten la: ";
console.log(randomstring + ten);

console.log(`Toi nam nay ${age} tuoi`);

//Number

let a = 12;
let b = 10;

// Toán tử + - * / %
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);




