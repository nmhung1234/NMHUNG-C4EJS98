// if - else if - else (Cau dieu kien re nhanh)
    // if(condition 1)
    // {
    //     //do st
    // }
    // else if (condition 2)
    // {
    //     //do st
    // }
    // else if (condition 3)
    // {
    //     //do st
    // }
    // else 
    // {
    // //do st
    // }


//boolean (true / false)
    // let state = true;
    // let single = false;


// mệnh dề so sánh
// == != (so sánh giá trị)
// ===, !== (so sánh cả giá trị và kiểu dữ liệu)
// >, <, >=, <=
    // console.log( 1 == "1");
    // console.log( 1 === "1");


// &&(and),  ||(or)
    // console.log( 1 != "1" && 2 > 3);

    // console.log( 3 === '3' || 1 !== '1');

// // ex 1:
// // cho người dùng nhập vào tuổi - check tuổi. Nếu < 18 thì in ra k cho vào club. nếu 18 < age < 21 thì cho vào nhưng k cho uống rượu
// // nếu > 18 thì cho uống
// let age = Number(prompt("Enter your age: "));
// if (age < 18)
// {
//     console.log("Không được đi bar nha !");
// }
// else if (18 < age && age < 21 )
// {
//     console.log("Không được uống nha !");
// }
// else
// {
//     console.log("Let's Dance !");
// }


// // ex 2:
// let height = Number(prompt("Your height (cm): "));
// let weight = Number(prompt("Your weight: "));
// let BMI = (weight / (height*height)).toFixed(4);
// console.log("Your BMI: ", BMI);


// // ex 3:
// let n1 = Number(prompt("Number 1: "));
// let n2 = Number(prompt("Number 2: "));
// let n3 = Number(prompt("Number 3: "));

// let max = n1;

// if (n2 > max)
// {
//     max = n2;
// }
// if (n3 > max)
// {
//     max = n3;
// }
// console.log("Max is: ", max);

// ex 4:
    // let month = Number(prompt("Your Month: "));
    // switch (month)
    // {
    //     case 1:
    //     case 2:
    //     case 3:
    //     {
    //         console.log("Mùa Xuân");
    //         break;
    //     }
    //     case 4:
    //     case 5:
    //     case 6:
    //     {
    //         console.log("Mùa Hạ");
    //         break;
    //     }
    //     case 7:
    //     case 8:
    //     case 9:
    //     {
    //         console.log("Mùa Đông");
    //         break;
    //     }
    //     case 10:
    //     case 11:
    //     case 12:
    //     {
    //         console.log("Mùa Đông");
    //         break;
    //     }
    //     default:
    //         console.log("K nhập thì biết tháng mấy ạ !!!");
    // }


// loop ( vòng lặp )

// while, for
    // let i = 0;
    // while (i < 5)
    // {
    //     // do st
        
    //     console.log("Hello World");
    //     i++;
    // }

// ex with while:
// game đoán số
// while lặp số lần k biết trước
    // let result  = 10;
    // let loop = true;
    // i = 0;
    // while (loop)
    // {
    //     if(i == 0)
    //     {
    //         let num = Number(prompt("Bạn nhập số đê: "));
    //         if(num == result)
    //         {
    //             console.log("BINGO");
    //             loop = false;
    //         }
    //         // i++;
    //         break;
    //     }
    //     num = Number(prompt("Bạn nhập lại số đê: "));
    //     if(num < result)
    //     {
    //         console.log("Too low");
    //     }
    //     else if(num > result)
    //     {
    //         console.log("Too high");
    //     }
    //     else
    //     {
    //         console.log("BINGO");
    //         loop = false;
    //     }
    // }


// for lap so lan biet trc

    // for (let i = 0; i < 10; i++) {
    //     console.log("Hello world");
    // }
    // // ex1: in ro so cach nhau 3 don vi,  5 don vi
    // for(let i = 1; i < 20; i += 2 )
    // {
    //     console.log(i);
    // }
    // console.log("==============")
    // for(let i = 5; i < 25; i += 5 )
    // {
    //     console.log(i);
    // }

    // //ex2: 
    // let n = Number(prompt("Nhap so n:"));
    // for (let i = 0; i < n; i++) 
    // {
    //    if(i % 2 == 0)
    //    {
    //        console.log(`So ${i} la so chan`);
    //    }
    //    else
    //    console.log(`So ${i} la so le`);
    // }
