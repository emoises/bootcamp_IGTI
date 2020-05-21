const rgb = ['red', 'green', 'blue'];
const index = [0,1,2]
let sliderArray = [];
let spanArray = [];
const square = document.getElementById('square');
const utils = {
    start: function(){
        index.forEach(Element => {
            sliderArray.push(document.querySelector('#' + rgb[Element] + 'Slider'))
            spanArray.push(document.getElementById(rgb[Element] + 'Value'))
            spanArray[Element].value = sliderArray[Element].value;
        })
    },
    changeValue: function(){
        index.forEach(Element => {spanArray[Element].value = sliderArray[Element].value;});
    },
    changeColor: function(){
        color='rgb('
        index.forEach(Element => {
            color += sliderArray[Element].value +','
        });
        square.style.background = color.slice(0, color.length - 1)+')';}
}
window.addEventListener('load', utils.start())
sliderArray.forEach(Element => {
    Element.addEventListener('input', utils.changeValue);
    Element.addEventListener('mouseup', utils.changeColor);
})