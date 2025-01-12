// method 1

// The reject tells about the things that ar considered into the function
// and the rest of the  goes to other

function showKeyCodes(e) {
    const insert = document.getElementById('insert');
    insert.innerHTML = `<div id="insert">
            <div class="key">
                ${e.key===' '?'space': e.key}
                <small>
                    e.key
                </small>
            </div>
            <div class="key">
                ${e.keyCode}
                <small>e.keyCode</small>
            </div>
            <div class="key">
                ${e.code}
                <small>e.code</small>
            </div>
        </div>`;

    window.addEventListener('mousedown', pageOrg);
}


//method 2 for another way done by object literal

function showKeyCodes(e) {
    const insert = document.getElementById('insert');
    insert.innerHTML = '';
    const obj = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code,
    };

    for (let ele in obj) {
        const div = document.createElement('div');
        div.className = 'key'

        const small = document.createElement('small')
        const keyText = document.createTextNode(ele);
        const valueText = document.createTextNode(obj[ele]);

        small.appendChild(keyText);
        div.appendChild(small);
        div.appendChild(valueText);
        insert.appendChild(div);
        // insert.innerText = `<div id="insert">
        //     <div class="key">
        //         ${obj['e.key']}    
        //     <small>
        //             e.key
        //         </small>
        //     </div>
        //     <div class="key">
        //         ${obj['e.keyCode']}
        //         <small>e.keyCode</small>
        //     </div>
        //     <div class="key">
        //         ${obj['e.code']}
        //         <small>e.code</small>
        //     </div>
        // </div>`

    }

}
















// Method 1
// window.addEventListener('keydown', (e) => {
//   const insert = document.getElementById('insert');

//   insert.innerHTML = `
//     <div class="key">
//       ${e.key === ' ' ? 'Space' : e.key}
//       <small>e.key</small>
//     </div>

//     <div class="key">
//       ${e.keyCode}
//       <small>e.keyCode</small>
//     </div>

//     <div class="key">
//       ${e.code}
//       <small>e.code</small>
//     </div>
//   `;
// });
/*
// Method 2
function showKeyCodes(e) {
    const insert = document.getElementById('insert');
    insert.innerHTML = '';

    const keyCodes = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code,
    };

    for (let key in keyCodes) {
        const div = document.createElement('div');
        div.className = 'key';
        const small = document.createElement('small');

        const keyText = document.createTextNode(key);
        const valueText = document.createTextNode(keyCodes[key]);

        small.appendChild(keyText);
        div.appendChild(valueText);
        div.appendChild(small);

        insert.appendChild(div);
    }

    window.addEventListener('mousedown', pageOrg);
}

*/
function pageOrg(e) {
    const insert = document.getElementById('insert');
    insert.innerHTML = 'Press and key to get the keycode';
}
window.addEventListener('keydown', showKeyCodes);