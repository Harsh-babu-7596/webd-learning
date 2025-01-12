// //Quick and dirty

// function createListItem(item) {
//     // const lit = `<li>${item}</li>`
//     const lit = document.createElement('li');
//     lit.innerHTML = `${item} <button class = "remove-item btn-link text-red" >
//         <i class = "fa-solid fa-xmark" > </i> 
//         </button>`;
//     document.querySelector('.items').appendChild(lit);
// }

// createListItem('omplet')

//clean way

function createNewItem(item) {
    const lit = document.createElement('li');
    lit.appendChild(document.createTextNode(item))

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';
    button.style
        // console.log(button);
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';
    button.appendChild(icon);
    // console.log(icon);
    lit.appendChild(button);
    document.querySelector('ul').appendChild(lit)
}
// the 2nd is more efficient and we need to keep track of them manually



/*// Quick & Dirty
function createListItem(item) {
    const li = document.createElement('li');

    li.innerHTML = `${item}
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`;

    document.querySelector('.items').appendChild(li);
}

// Clean & Performant
function createNewItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';


    button.appendChild(icon);
    li.appendChild(button);

    document.querySelector('.items').appendChild(li);
    }
    */
createNewItem('akjdaksj');

// createListItem('Eggs');