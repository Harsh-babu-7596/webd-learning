// Break
// allows to break out of the loop once done
for (let i = 0; i <= 20; i++) {
    if (i === 15) {
        console.log('Breaking...');
        break;
    }
    console.log(i);
}

// Continue
// we can skip the code in the current iteration and continue

// like here after continue is reached the rest of the code in the loop below continue
// is skipped and it goes out to next after increment.

for (let i = 0; i <= 20; i++) {
    if (i === 13) {
        console.log('Skipping 13...');
        continue;
    }
    console.log(i);
}