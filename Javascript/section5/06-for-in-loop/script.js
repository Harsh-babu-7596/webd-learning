// quite same as for of the difference is that for of iterates over the values
// for in iterates over the properties like index stcs
// like explained in 3rd part from here

// Loop through objects
const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
};

for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

for (const key of colorObj) {
    console.log(key, colorObj[key]);
}

// Loop through arrays
const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const key in colorArr) {
    console.log(colorArr[key]);
}