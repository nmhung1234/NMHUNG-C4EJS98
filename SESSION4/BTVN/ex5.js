let products = [
    {
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'White',
        category: 'Charger',
        Providers: ['Phukienzero', 'Dientuccc']
    },
    {
        name: 'VSmart Active 1',
        brand: 'VSmart',
        price: 5487,
        color: 'Black',
        category: 'Phone',
        Providers: ['Tgdd', 'Ddghn', 'VhStore']
    },
    {
        name: 'IPhone X',
        brand: 'Apple',
        price: 21490,
        color: 'Gray',
        category: 'Phone',
        Providers: ['Tgdd']
    },
    {
        name: 'Samsung Galaxy A9',
        brand: 'Samsung',
        price: 8490,
        color: 'Blue',
        category: 'Phone',
        Providers: ['Tgdd']
    },
]
// // 5.1
for (let product of products)
    console.log(`---------------- \nName: ${product.name}\nPrices: ${product.price}`);

// //  5.2
console.log('5.2');
for (let i = 0; i < products.length; i++) {

    console.log(`#${i + 1}. ${products[i].name}\nPrices: ${products[i].price}`);
}

let detailProduct = Number(prompt("Enter product position"));
console.log(`----------------------
Name: ${products[detailProduct - 1].name}
Brand: ${products[detailProduct - 1].brand}
Price: ${products[detailProduct - 1].price}
Color: ${products[detailProduct - 1].color}
Category: ${products[detailProduct - 1].category}`);

// // 5.3
let categoryOutput = (prompt("Enter your category"));
for (let i = 0; i < products.length; i++) {
    if (categoryOutput == products[i].category) {
        console.log('-------------');
        console.log('Name:', products[i].name);
        console.log('Price:', products[i].price);
    }
}

// 5.4

for (let i = 0; i < products.length; i++) {
    console.log(`#${i + 1}. \nName: ${products[i].name}\nPrices: ${products[i].price}\nProvides: ${products[i].Providers}`);
}

// 5.5

let providesOutput = (prompt("Enter your provides"));

for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i]['Providers'].length; j++) {
        if (providesOutput == products[i].Providers[j]) {
            console.log('-------------');
            console.log('Name:', products[i].name);
            console.log('Price:', products[i].price);
            console.log('Provides:', products[i].Providers[j]);
        }

    }

}


