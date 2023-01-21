const hello = document.getElementById("hello");

const goodbye = document.getElementById("goodbye");

hello.addEventListener("click", () => {
    console.log("hello");
});

goodbye.addEventListener("click", () => {
    console.log("goodbye");
});

const changeColor = document.getElementById("change-color");

changeColor.addEventListener("click", colorizeBg);

function colorizeBg() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const color1 = `rgb(${r}, ${g}, ${b})`;
    const color2 = `rgb(${200 - r}, ${200 - g}, ${200 - b})`;
    this.style.backgroundColor = color1;
    console.log("color1: ", color1);
    console.log("color2: ", color2);
    document.body.style.backgroundColor = color2;
}

const form1 = document.querySelector('#form1')
form1.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('submit pressed')
})

const h12 = document.querySelector('#h12')
const form2 = document.querySelector('#form2')
const frm2Inp = document.querySelector('#f2Inp')
form2.addEventListener('input', function(e){
    console.log('frm2Inp.value: ', frm2Inp.value)
    h12.innerText = `Hello, ${frm2Inp.value}`
})



