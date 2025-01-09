// challange 1


const getCelsius = a => (5 / 9) * (a - 32);

console.log(`The temperature is ${getCelsius(32)} \xB0C`);
// The temperature is 0 °C


// challange 2
const minMax = (arr) => {
    const mi = Math.max(...arr);
    const ma = Math.min(...arr);
    return { ma, mi };
}
console.log(minMax([1, 2, 3, 4, 5]));
// { min: 1, max: 5 }




// challange 3
((length, width) => {
    // On page load
    console.log("The area of a rectangle with a length of", length, "and a width of", width, "is", length * width, ".");
})(20, 30)







/*
// Challenge 1
// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;
// }

const getCelsius = (f) => ((f - 32) * 5) / 9;

console.log(`The temp is ${getCelsius(35)} \xB0C `);

// Challenge 2
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMax([2, 31, 4, 5, 6]));

// Challenge 3
((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(20, 10);
*/