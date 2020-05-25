window.addEventListener('load', () => {
    doSpread();
    doRest();
    doDestructuring();
});

function doSpread() {
    const marriedMen = people.results.filter(
        person => person.name.title ==='Mr'
    );
    const marriedWomen = people.results.filter(
        person => person.name.title === 'Ms'
    )
    marriedPeople = [...marriedMen,...marriedWomen,{msg: 'oi'}]
    console.log(marriedPeople)
}
function doRest(){
    console.log(infiniteSum(1,2))
    console.log(infiniteSum(1,2,3))
    console.log(infiniteSum(1,2,3,4,5))
    console.log(infiniteSum(1,2,3,4,5,6,7,8,9,10))
}

function infiniteSum (...numbers){
    return numbers.reduce((acc,curr) => acc + curr, 0 );
}
function doDestructuring() {
    
}