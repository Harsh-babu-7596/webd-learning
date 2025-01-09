// querySelectorAll()
// Returns a NodeList

const listItems = document.querySelectorAll('.item');
// console.log(listItems);
// Access elements by index
console.log(listItems[1].innerText);

// Setting a color for specific element
listItems[1].style.color = 'green';
// We can use forEach() on a NodeList
listItems.forEach((item, index) => { //one more argument can also be array itself
    item.style.color = 'red';

    if (index === 1) {
        item.remove();
    }

    if (index === 0) {
        item.innerHTML = ` Oranges
      <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
      </button> `;
        //copy everything when copying a change into a property with some ID
    }
});

// getElementsByClassName()
// Returns an HTMLCollection
// we can only get the class items and we'll not need the class
const listItems2 = document.getElementsByClassName('item');

console.log(listItems2[2].innerText);

const listItemsArray = Array.from(listItems2); //we'll need to convert HTML collection back to order as it'll be required

listItemsArray.forEach((item) => {
    console.log(item.innerText);
});

// getElementsByTagName()

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0].innerText);
//just remember HTML collection me foreach kaam nai krta but other case me krta h
/*
 */