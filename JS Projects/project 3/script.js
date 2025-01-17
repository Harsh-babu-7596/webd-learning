const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('Text-Area')

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key == 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10)
        randomS();
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });

}

function randomS() {
    // console.log();
    const times = 20;

    const interval = setInterval(() => {

        const randomTag = pickRandomTag()
        if (randomTag !== undefined) {
            highlightTag(randomTag);
        }
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 300);
    }, 100)

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const rt = pickRandomTag()
            highlightTag(rt);
        })
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}