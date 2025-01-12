const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
    heading.textContent = e.target.value; //gives whatever is in input
}

function onChecked(e) {
    const isChecked = e.target.checked; //we can also add target value checked works same
    heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

function onFocus() {
    console.log('Input is focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '5px';
    itemInput.style.outlineColor = 'green';
}

function onBlur() {
    console.log('Input is not focused');
    itemInput.style.outlineStyle = 'none';
}

/**/
// input, change, focus and blur events
itemInput.addEventListener('input', onInput); //works same as key down and 

priorityInput.addEventListener('change', onInput); //works almost same as input
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);