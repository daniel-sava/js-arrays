let numbers = [1, 2, 98, 105, 110];
let someObject = { name: 'John' };

console.log(typeof numbers);
console.log(typeof someObject);

console.log(Array.isArray(numbers));
console.log(Array.isArray(someObject));

// entries
let iterator = numbers.entries();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// while (iterator.next().value) {
//     console.log(iterator.next().value);
// }

let iteratorValue = iterator.next().value;

while (iteratorValue) {
    console.log(iteratorValue);
    iteratorValue = iterator.next().value;
}

// if (iteratorValue) {
//     do {
//         console.log(iteratorValue);
//         iteratorValue = iterator.next().value;
//     } while (iteratorValue);
// }

// at
console.log(numbers.at(2));
console.log(numbers[2]);

// every
console.log(numbers.every((number) => number > 1));

// fill
console.log(numbers.fill(5, 1, 4));

// filter
console.log(numbers.filter((number) => number === 5));

let products = [
    { name: 'Laptop Lenovo', price: 2500, color: 'black' },
    { name: 'Desktop PC', price: 15000, color: 'red' },
    { name: 'Macbook Pro', price: 8500, color: 'space-grey' },
];

console.log(products.filter((product) => product.price > 6000));
console.log(products.filter((product) => product.color === 'black'));

// findIndex
console.log(numbers.findIndex((value) => value === 5));

// findLastIndex
console.log(numbers.findLastIndex((value) => value === 5));

// flat
let deepArray = [1, 5, 10, 30, [9, 12]];
console.log(deepArray.flat());

let deepArray2 = [1, 5, 10, 30, [9, 12], [101, 102, [103, 104]]];
console.log(deepArray2.flat());
// console.log(deepArray2.flat().flat());
console.log(deepArray2.flat(2));

// flatMap
console.log(deepArray.flatMap((value) => value + 10));

// join
const productAttributes = ['black', 'with stripes', 'ram 16gb', 'laptop'];
console.log(productAttributes.join(' - '));

const personNames = ['John', 'D.', 'Doe'];
console.log(personNames.join(' '));

// map
let cars = [
    { brand: 'Audi', model: 'A5', hp: 150, year: 2021 },
    { brand: 'Renault', model: 'Megane', hp: 110, year: 2018 },
    { brand: 'BMW', model: 'X5', hp: 320, year: 2020 },
];

console.log(
    cars.map((car) => ({
        manufacturer: car.brand,
        model: car.year,
    }))
);

// map + filter
let values = [1, 2, 50, 100];
console.log(values.map((value) => value + 10));
console.log(values.map((value) => value + 10).filter((value) => value > 15));

console.log(values.length);

// unshift
console.log(values.unshift(1, 4, 5, 6, 10));
console.log(values);

// length
console.log(values.length);

// some
let mixedNumbers = [-4, -20, 0, 1, 4, 9, 100, -33, 987];
console.log(mixedNumbers.some((value) => value > 0));

// find
console.log(mixedNumbers.find((value) => value > 10));

// findLast
console.log(mixedNumbers.findLast((value) => value > 10));

// splice
mixedNumbers.splice(2, 0, 45);
console.log(mixedNumbers);

// slice
let mixedNumbersSlice1 = mixedNumbers.slice(0, 5);
let mixedNumbersSlice2 = mixedNumbers.slice(5, mixedNumbers.length);

console.log(mixedNumbersSlice1);
console.log(mixedNumbersSlice2);
console.log(mixedNumbers);

// concat (toate 3 metodele sunt echivalente)
console.log(mixedNumbersSlice1.concat(mixedNumbersSlice2, mixedNumbers));
console.log([].concat(mixedNumbersSlice1, mixedNumbersSlice2, mixedNumbers));
console.log([...mixedNumbersSlice1, ...mixedNumbersSlice2, ...mixedNumbers]);
