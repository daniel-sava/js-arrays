let users = [
    { email: 'email1@gmail.com', age: 25, password: 'Pass1' },
    { email: 'email2@gmail.com', age: 15, password: 'Pass2' },
    { email: 'email3@gmail.com', age: 29, password: 'Pass3' },
    { email: 'email4@gmail.com', age: 42, password: 'Pass4' },
    { email: 'email5@gmail.com', age: 12, password: 'Pass5' },
];

let userEmails = [
    'email1@gmail.com',
    'email2@gmail.com',
    'email3@gmail.com',
    'email4@gmail.com',
    'email3@gmail.com',
];

// Metode care nu modifica array-ul initial

// includes
console.log(userEmails.includes('email2@gmail.com'));
console.log(userEmails.includes('email12@gmail.com'));

console.log(
    users.includes({ email: 'email1@gmail.com', age: 25, password: 'Pass1' })
);

// indexOf
console.log(userEmails.indexOf('email3@gmail.com'));

// lastIndexOf
console.log(userEmails.indexOf('email3@gmail.com'));

// indexOf + map
console.log(users.map((user) => user.email).indexOf('email5@gmail.com'));

function areObjectsEqual(object1, object2) {
    let equal = true;

    for (let property in object1) {
        if (object1[property] != object2[property]) {
            equal = false;
            break;
        }
    }

    return equal;
}

console.log(
    areObjectsEqual(
        { email: 'email1@gmail.com', age: 25, password: 'Pass1' },
        { email: 'email1@gmail.com', age: 25, password: 'Pass1' }
    )
);

let array1 = [1, 7, 19, -20, 101];
let array2 = [87, 34, -100, -23, 0];

console.log(array1);
console.log(array2);

let array3 = array1.concat(array2);

console.log(array3);

array3.sort((number1, number2) => (number1 > number2 ? 1 : -1));
console.log(array3);

let array4 = [8, 0, 1, 9, 6, 4];
array4.sort();
console.log(array4);
