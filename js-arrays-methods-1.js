let products = [
    { name: 'Laptop Lenovo', price: 2500, color: 'black' },
    { name: 'Desktop PC', price: 15000, color: 'red' },
    { name: 'Macbook Pro', price: 8500, color: 'space-grey' },
];

console.log(products);

products.forEach((product) => {
    console.log(product.price > 5000 ? 'Prea scump' : 'Ieftin');
});

// Metode care modifica array-ul initial

// pop
products.pop();

console.log(products);

// push
products.push({ name: 'PlayStation 5', price: 2500, color: 'white' });

console.log(products);

// reverse
products.reverse();

console.log(products);

// sort
products.sort((product1, product2) => {
    return product1.price < product2.price ? 1 : -1;
});

console.log(products);

// shift
products.shift();

console.log(products);

// reduce
let initialTotalPrice = 0;
let totalPrice = products.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    initialTotalPrice
);

console.log(totalPrice);
