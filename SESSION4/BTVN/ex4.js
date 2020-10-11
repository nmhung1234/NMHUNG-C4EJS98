// ex4
let dictionary = [
    {
        keyword: 'debugger',
        explanation: 'The process of figuring out why your program has a certain error and how to fix it',
    },
    {
        keyword: 'done',
        explanation: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    },
    {
        keyword: 'defect',
        explanation: 'The formal word for ‘error’',
    },
    {
        keyword: 'pm',
        explanation: 'The short version  of Project Manager, the person in charge of the final result of a project',
    },
    {
        keyword: 'ux',
        explanation: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
    }
]
// 4.1 + 4.2
let keyword;
let count = 0;
do {
    alert('Hi there, this is dev dictionary');
    keyword = String(prompt('Enter your keyword'));

    for (let keyw of dictionary) {
        if (keyword == keyw.keyword) {
            alert(`${keyword} \n${keyw.explanation}`);
            break;
        }
        count++;
    }
    if (count == dictionary.length && keyword != '') {
        let expla = String(prompt(`We could not find your word: ${keyword}, leave your explanation`));
        alert('Done');
        let dic = {};
        dic['keyword'] = keyword;
        dic['explanation'] = expla;
        dictionary.push(dic);
        alert(`${keyword} \n${expla}`);
    }
    if(keyword == '')
    alert(`Please enter your word`);

} while (keyword != 'e');