const library = [{
        title: "t1",
        author: "A1",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "t2",
        author: "A3",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "t3",
        author: "A2",
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
]

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// console.log(library);


// step 3

const { title: firstBook } = library[0];

console.log(firstBook);

// step 4
const ans = JSON.stringify(library);

console.log(ans, typeof ans);















/*
// Step 1
const library = [{
        title: 'The Road Ahead',
        author: 'Bill Gates',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Mockingjay',
        author: 'Suzanne Collins',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
const { title: firstBook } = library[0];

console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);*/