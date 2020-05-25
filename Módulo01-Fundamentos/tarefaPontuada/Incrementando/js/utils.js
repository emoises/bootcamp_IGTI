export function start(index,rgb, firstArray, secondArray){

    index.forEach(Element => {
        firstArray.push(document.querySelector('#' + rgb[Element] + 'Slider'))
        secondArray.push(document.getElementById(rgb[Element] + 'Value'))
        secondArray[Element].value = firstArray[Element].value;
    })
    return firstArray, secondArray
};
export function changeValue(index,firstArray, secondArray) {
    index.forEach(Element => { 
        secondArray[Element].value = firstArray[Element].value; 
    });
}
export function changeColor(index,firstArray, item) {
    color = 'rgb('
    index.forEach(Element => {
        color += firstArray[Element].value + ','
    });
    item.style.background = color.slice(0, color.length - 1) + ')';
}