// // ex 1
// let input1 = parseInt(prompt("Enter N:"));
// let countchan = 0, countle = 0;
// for(let i = 1; i <= input1; i++)
// {
//     if((i % 2) == 0)
//         countchan ++;
//     else
//         countle ++;
// }
// console.log(`Tổng số chẵn từ 1 - ${input1} là: `, countchan);
// console.log(`Tổng số lẻ từ 1 - ${input1} là: `, countle);



//ex 2:
// let userInput2 = Number(prompt("Nhập số n: "));
// let count = 0;
// for(let i = 1; i <= userInput2; i++)
// {
//     if (userInput2 % i == 0)
//     {
//         count ++;
//     }
// }
// if(count == 2)
//     console.log("True");   
// else
//     console.log("False");


// // ex3
// // in ra số nguyên tố
// let userInput3 = Number(prompt("Nhập số n: "));
// let count = 0;
// for(let i = 2; i <= userInput3; i++)
// {
//     for(let j = 1; j <= i; j++ )
//     {
//         if (i % j == 0)
//         {
//             count ++;
//         }
//     }
//     if(count == 2)
//     {
//         console.log(i);
        
//     }
//     count = 0;  
// }

// console.log('===============')



// //ex4 dãy fibonacci
// sum  = 0;
// let a = 1, b = 0, temp;
// while(userInput > 0)
// {
//     temp = a;
//     a = a + b;
//     b = temp;
//     userInput --;
// }
// console.log(b);


// // ex5
// let loop = true;
// let sum5 = 0;
// while (loop)
// {
//     let input5 = Number(prompt("Nhập số ngẫu nhiên: "));
//     if(input5 >= 0)
//     sum5 += input5;
//     else
//     loop = false;
// }
// console.log(sum5);


 //ex 6: failed
//  let string6 = prompt("Enter your string");
//  let width = string6.length;
//  let mid;
//  let count6 = 0;
//  if(width % 2 == 0)
//  {
//      mid = width / 2;
//      for(let i = 1; i < mid; i++)
//      {
//          if(string6[i] == string6[2*mid-i])
//          {
//              count6 ++;
//              console.log(string6[i]);
//          }
//      }
//      if(count6 == mid)
//      console.log("Chuỗi đối xứng");
//      else
//      console.log("Chuỗi không đối xứng")
//  }
 

// ex 7: unsatisfied
    // let row7 = Number(prompt("Enter Rows: "));
    // let column7 = Number(prompt("Enter column7: "));
    // let array7 = new Array (column7);

    // for(let i = 0; i < column7; i++)
    // {
    //     array7[i] = '*';
    // }
    // for(let j = 0; j < row7; j++)
    // {
    //    console.log(array7);
    // }


// ex9

// let a1 = Number(prompt("Hệ pt 2 ẩn - dòng 1 - a: "));
// let b1 = Number(prompt("Hệ pt 2 ẩn - dòng 1 - b: "));
// let c1 = Number(prompt("Hệ pt 2 ẩn - dòng 1 - c: "));
// let a2 = Number(prompt("Hệ pt 2 ẩn - dòng 2 - a: "));
// let b2 = Number(prompt("Hệ pt 2 ẩn - dòng 2 - b: "));
// let c2 = Number(prompt("Hệ pt 2 ẩn - dòng 2 - c: "));

// let x,y;

// x = (c2 - ((b2*c1)/b1))/(a2 - (b2*a1)/b1);
// y = (c1 - a1*x)/b1;
// console.log(`X = ${x}`);
// console.log(`Y = ${y}`);









