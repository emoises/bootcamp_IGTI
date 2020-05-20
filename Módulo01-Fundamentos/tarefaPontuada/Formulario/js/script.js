window.addEventListener('load', start)
const red = document.querySelector('#redSlider');
const redSpan = document.getElementById('redSpan');
const green = document.querySelector('#greenSlider');
const greenSpan = document.getElementById('greenSpan');
const blue = document.querySelector('#blueSlider');
const blueSpan = document.getElementById('blueSpan');
const square = document.getElementById('square');
const redTitle = document.getElementById('redTitle')
const greenTitle = document.getElementById('greenTitle')
const blueTitle = document.getElementById('blueTitle')
function start(){
    redSpan.value = red.value
    red.addEventListener('input', changeRed);
    greenSpan.value = green.value
    green.addEventListener('input', changeGreen);
    blueSpan.value = blue.value   
    blue.addEventListener('input', changeBlue);
    var color = "rgb(" + red.value + ',' + green.value + ',' + blue.value + ')';
    square.style.background = color
    var textColorRed = 'rgb(' + red.value +',0,0)';
    redTitle.style.background = textColorRed
    var textColorGreen = 'rgb(0,' + green.value +',0)';
    greenTitle.style.background = textColorGreen
    var textColorBlue = 'rgb(0,0,' + blue.value +')';
    blueTitle.style.background = textColorBlue                          
    console.log(color);
    console.log(square.style.backgroundColor);
}
function changeRed(event) {
    redSpan.value = event.target.value; 
    console.log(redSpan)
    var color = "rgb(" + red.value + ',' + green.value + ',' + blue.value + ')';
    textColorRed = 'rgb(' + red.value + ',0,0)';
    redTitle.style.background = textColorRed
    square.style.background = color
    if (event.target.value<100) {
        redTitle.style.color = 'rgb(200,0,0)';
    }else{
        redTitle.style.color = 'rgb(0,0,0)'
    }
}
function changeGreen(event) {
    greenSpan.value = event.target.value;
    var color = "rgb(" + red.value + ',' + green.value + ',' + blue.value + ')';
    square.style.background = color
    textColorGreen = 'rgb(0,' + green.value + ',0)';
    greenTitle.style.background = textColorGreen
    if (event.target.value < 100) {
        greenTitle.style.color = 'rgb(0,200,0)';
    } else {
        greenTitle.style.color = 'rgb(0,0,0)'
    }
}
function changeBlue(event) {
    blueSpan.value = event.target.value;
    var color = "rgb(" + red.value + ',' + green.value + ',' + blue.value + ')';
    square.style.background = color
    textColorBlue = 'rgb(0,0,' + blue.value + ')';
    blueTitle.style.background = textColorBlue
    if (event.target.value < 100) {
        blueTitle.style.color = 'rgb(0,0,200)';
    } else {
        blueTitle.style.color = 'rgb(0,0,0)'
    }
}