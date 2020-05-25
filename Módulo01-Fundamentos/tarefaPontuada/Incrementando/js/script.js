const rgb = ['red', 'green', 'blue'];
const index = [0,1,2]
import { start,changeValue, changeColor } from './utils.js'
let sliderArray = [];
let spanArray = [];
const square = document.getElementById('square');
window.addEventListener('load', start(index,rgb, sliderArray,spanArray))
sliderArray.forEach(Element => {
    Element.addEventListener('input', changeValue(sliderArray,spanArray));
    Element.addEventListener('mouseup', changeColor(sliderArray, square));
})