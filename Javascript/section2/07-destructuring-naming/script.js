// Setting object properties with the same name as a variable
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
};
// we will not need to defile values in the above object
// console.log(person.age);
// 
// Destructuring object properties


const todo = {
    id: 1,
    title: 'Take out trash'
};

const {
    id: todoID, // rename id to todoId
    title // destructuring multiple levels
} = todo;

console.log(todoID, title);

// Destructuring arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

// console.log(first, second, rest);