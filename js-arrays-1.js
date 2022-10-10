let car1 = { brand: 'Audi', model: 'A5' };
let car2 = { brand: 'Renault', model: 'Megane' };
// ...
let car10 = { brand: 'BMW', model: 'X5' };

console.log(car1);
console.log(car2);
console.log(car10);

// functioneaza doar pe Arrays

// for (let carData of car1) {
//     console.log(carData);
// }

for (let carData in car1) {
    console.log(carData);
}

//

let cars = [
    { brand: 'Audi', model: 'A5' },
    { brand: 'Renault', model: 'Megane' },
    { brand: 'BMW', model: 'X5' },
];

// echivalent cu let cars = [car1, car2, car10];

console.log(cars);

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

for (let index = 0; index <= cars.length - 1; index++) {
    console.log(cars[index]);
}

for (let car of cars) {
    console.log(car);
}

for (let car in cars) {
    console.log(cars[car]);
}

let mixedValues = [1, 'Text', 34, 19, { name: 'John' }, 'Text 2'];
console.log(typeof mixedValues[0]);
console.log(typeof mixedValues[1]);
console.log(typeof mixedValues[2]);
console.log(typeof mixedValues[3]);
console.log(typeof mixedValues[4]);
console.log(typeof mixedValues[5]);

for (let index = 0; index < mixedValues.length; index++) {
    console.log(mixedValues[index]);
}

for (let mixedValue of mixedValues) {
    console.log(mixedValue);
}
