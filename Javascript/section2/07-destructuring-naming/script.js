// Setting object properties with the same name as a variable
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
};
// we will not need to defile values in the above object and its called
// as destructuring
// console.log(person.age);
// 
// Destructuring object properties


const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'john',
    },
};

const {
    id: todoID, // rename id to todoId is done by this as its defines earlier
    title, // destructuring multiple levels
    user: { name },
} = todo;


// Destructuring arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];

console.log(todoID, title);

const [first, second, ...others] = numbers; //we generally ut 3 dots to use the rest operator
// the rest operator needs to be used with ...
console.log(first, second, others);