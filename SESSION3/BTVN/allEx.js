//ex 1

// let a = 5;
// let b = 6;
// console.log(a,b)
// cach 1: dung bien tam thoi
// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// cach 2: k dung bien tam thoi
// a = (a + b);
// b = a - b;
// a = a - b;
// console.log(a,b);


//ex 2: cut string 
// let s = 'Hello beauty there';
// const arr = new Array();
// let temp = "";
// for(let  i = 0; i <s.length; i++)
// {
//     if(s[i] == ' ')
//     {
//         for(let j = 0; j < i; j++)
//         {
//             temp = temp + s[j];
//         }
//         arr.push(temp);
//         s = s.slice(i+1);
//         console.log(s);
//         temp = "";
//     }

// }
// if(s[s.length] != " ")
//     arr.push(s);

// console.log(arr);



//ex3
//  const a = [4,5,7,-8];
//  console.log(...a);



// ex4 ---- I dont know why my 'd' is disconnect

    // let items = ['Jeans', 'T-Shirt', 'Socks'];
    // let input = String(prompt("Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?"));
    // do {
    //     if (input == 'c' || input == 'r' || input == 'u' || input == 'd')
    //     {
    //         switch (input) {
    //             case 'r':
    //                 {
    //                     console.log("The current items are:");
    //                     for (let i = 0; i < items.length; i++) {
    //                         console.log(`${i + 1}. ${items[i]}`);
    //                     }
    //                     input = String(prompt("Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?"));
    //                     break;
    //                 }
    //             case 'c':
    //                 {
    //                     let add = String(prompt("Enter the name of the item"));
    //                     alert("Done");
    //                     items.push(add);
    //                     console.log([...items]);
    //                     input = String(prompt("Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?"));
    //                     break;
    //                 }
    //             case 'u':
    //                 {
    //                     let positionUpdate = Number(prompt("Enter your position you want to update"));
    //                     let valueUpdate = String(prompt("Enter the name"));
    //                     alert("Done");
    //                     items[positionUpdate -1] = valueUpdate;
    //                     console.log([...items]);
    //                     input = String(prompt("Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?"));
    //                     break;
    //                 }
    //             case 'd':
    //                 {
    //                     //cắt ra làm 2 phần k chứa phần từ cẩn xóa. Đẩy 2 phần đấy vào mảng temp. rồi gán tại temp bằng items ban đầu để loại bỏ phần tử cần xóa
    //                     let poDel = Number(prompt("Enter the position you wan to delete"));
    //                     alert("Done");
    //                     items.splice(poDel -1, 1);
    //                     console.log([...items]);
    //                     input = String(prompt("Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?"));
    //                     break;
    //                 }
    //         }

    //     } else {
    //         alert("This command is not supported");
    //         break;
    //     }

    // } while (input)



// ex5
// let numInput = prompt("Enter your Number:");
// let cutarr = numInput.split(',');
// let sum = 0;
//     for(let i = 0; i< cutarr.length; i++)
//     {
        
//         sum += Number(cutarr[i]);
//     }
//     alert(`The sum of them is ${sum}`);



//ex 6 
// let numInput = prompt("Enter your Number:");
// let cutarr = numInput.split(',');
// let min = cutarr[0];
//     for(let i = 1; i< cutarr.length; i++)
//     {
//         if(cutarr[i] <= min)
//         min = cutarr[i];
//     }
//     alert(`The smallest numbe is ${min}`);



//ex7
// const arr = [10, 20, 31, 55, 90, 87,52];
// let luckyNum = Number(prompt("Enter your number:"));
// let accept = false
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(luckyNum == arr[i])
//         {
//             alert(`${arr[i]} is FOUND in my array at index ${i}`);
//             accept = true;
//             break;
//         }
//     }
//     if(accept == false)
//     {
//             alert(`${luckyNum} is not FOUND in array`);
//     }



// ex 8:
// let SheepSizes = [5, 7, 300, 90, 24, 50, 75];
// let maxSheep = Math.max(...SheepSizes);
// const defaultSize = 8;
// console.log("Hello, my name is Phuong nam and here is my sheep sizes:");
// console.log(`${[...SheepSizes]}`);
// console.log('\n');

// console.log(`Now my biggest sheep has size ${maxSheep}, let's shave it`);

// let resetSize = SheepSizes.indexOf(maxSheep);
// SheepSizes[resetSize] = defaultSize;

// console.log("After shearing, here is my flock");
// console.log(`${[...SheepSizes]}`);
// console.log('\n');

// for(let i = 0; i< 5; i++)
// {
//     console.log(`Month ${i+1}`);
//     console.log('One month has, passsed, my sheeps have grown, here are there sizes');
//     for(let j = 0; j< SheepSizes.length; j++)
//     {
//         SheepSizes[j] += 50;
//     }
//     console.log(`${[...SheepSizes]}`);
//     console.log('\n');
// }
// let sum = 0;
// SheepSizes.forEach(value => sum += value)
// console.log(`My flock has size in total: ${sum}`);
// console.log(`I would get ${sum} *2$ = ${sum*2}`)




// ex 9
// https://turtle-js.herokuapp.com/?turtle=v4lcJMMxgg




// ex 10: dont like 100% hmmmmmmm

// let userInput = prompt("Enter the sequensec of names:");
// let cutarr = userInput.split(',');
// let cutarrNew = [];
// for(let i = 0; i < cutarr.length; i++)
// {
//     cutarrNew.push(`<${cutarr[i]}>`);
// }
// alert(`${[...cutarr]} => ${[...cutarrNew]}`);
 




// ex 11

// let userInput = prompt("Enter the sequensec numbers:");
// let cutarr = userInput.split(',');
// let odd = [];
// for(let i = 0; i< cutarr.length; i++)
// {
//     if(cutarr[i] % 2 != 0)
//     {
//         odd.push(cutarr[i]);
//     }
// }

// alert(`${[...cutarr]} => ${[...odd]}`);


