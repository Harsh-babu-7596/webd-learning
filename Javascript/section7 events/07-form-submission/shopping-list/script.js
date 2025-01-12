const form = document.getElementById('item-form');

function onSubmit(e) {
    e.preventDefault(); //revents submssion to the age which is another way ofdi=oing things

    // Get value with .value
    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    // so we can use some of the .value method and entries to print it 
    if (item === '' || priority === '0') {
        alert('Please fill in all fields');
        return;
    }

    console.log(item, priority);
}

// Using the FormData Object
function onSubmit2(e) {
    e.preventDefault();

    const formData = new FormData(form);

    // Get individual items
    const item = formData.get('item');
    const priority = formData.get('priority');

    console.log(item, priority);

    // Get all entries as an Iterator
    const entries = formData.entries();
    console.log(entries);

    // Loop through entries
    for (let entry of entries) {
        console.log(entry[1]);
    }
}

// form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);