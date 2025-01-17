let loadtext = document.querySelector('.loading-text');
let bg = document.querySelector('.bg');
let load = 0;
let int = setInterval(blurring, 30)
let res;

function blurring() {
    load++;
    if (load >= 99) {
        clearInterval(int);
    }
    loadtext.innerHTML = `${load}%`;
    // res = 70 - (load * 70) / 100;
    loadtext.style.opacity = map(100, 0, 1, 0, load);
    bg.style.filter = `blur(${map(100,0,30,0,load)}px)`;
}

function map(inm, inmi, otm, otmi, ip) {
    return otm - (ip * (otm - otmi) / (inm - inmi));
}