// stands for javascript object notation and its a light weight 
// data interchange format and a way of storing data in human readable format
// json is standard earlier it was xml


// there are certain things like github has public API's that are used
//pretty much a javascript object with double quotes

const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
};

// Convert to JSON string using stingify this is needed as temporary storage
// in browser can only store the strings not objects
const str = JSON.stringify(post);

console.log(typeof str);

// Parse JSON
const obj = JSON.parse(str);

console.log(typeof obj);

// JSON & arrays
const posts = [{
        id: 1,
        title: 'Post One',
        body: 'This is the body',
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body',
    },
];

// console.log(posts);

const str2 = JSON.stringify(posts);

console.log(str2, typeof str2);

// the thing is after stringify we need to parse it before