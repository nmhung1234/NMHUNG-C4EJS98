// ex 7: unsatisfied
    let row7 = Number(prompt("Enter Rows7: "));
    let column7 = Number(prompt("Enter column7: "));
    let array7 = new Array (column7);

    for(let i = 0; i < column7; i++)
    {
        array7[i] = '*';
    }
    for(let j = 0; j < row7; j++)
    {
       console.log(array7);
    }

