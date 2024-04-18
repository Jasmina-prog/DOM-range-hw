
const box = document.querySelector('.box');
const sliderWidth = document.querySelector('#slider-width');
// const span = document.querySelector('span')
const spanWidth = document.querySelector('.span-width');
const spanHeight = document.querySelector('.span-height');
const spanBorder = document.querySelector('.span-border');
const color = document.querySelector('#color')
const sliderHeight = document.querySelector('#slider-height')
const sliderBorder = document.querySelector('#slider-border')


sliderWidth.oninput = (()=>{
    let value = sliderWidth.value;
    spanWidth.textContent = value;
    box.style.width = `${value}px`
})

sliderHeight.oninput = (()=>{
    let value2 = sliderHeight.value;
    spanHeight.textContent = value2;
    box.style.height = `${value2}px`
})

sliderBorder.oninput = (()=>{
    let value3 = sliderBorder.value;
    spanBorder.textContent = value3;
    box.style.borderRadius = `${value3}px`
})

color.oninput = (()=>{
    box.style.backgroundColor = color.value;
    console.log( box.style.backgroundColor);
})
