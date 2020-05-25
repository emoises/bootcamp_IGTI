const people = [
        {
            name:{
                first:'Eduardo',
                last:'Silva'
            }
    },
        {
            name:{
                first:'Vanessa',
                last:'Maria'
            }
    },
        {
            name:{
                first:'Marina',
                last:'Costa'
            }
    },
        {
            name:{
                first:'Maria',
                last:'Figueira'
            }
    },
        {
            name:{
                first:'Maria',
                last:'Fernandez'
            }
    },
        {
            name:{
                first:'Maria',
                last:'Oliveira'
            }
    }
]
let index = 'Maria '
let resultName = []

const result = people.forEach( person => {
    let firsLowCase = person.name.first.toLowerCase();
    let lastLowCase = person.name.last.toLowerCase();
    let fullnameLowCasa = firsLowCase + ' ' + lastLowCase;
    if (firsLowCase.indexOf(index.toLowerCase().trim()) >= 0 
    || lastLowCase.indexOf(index.toLowerCase().trim()) >= 0 
    || fullnameLowCasa.indexOf(index.toLowerCase().trim()) >= 0){

        resultName = [...resultName, person]
    }
});

let testeNome = 'Eduardo Silva     '
let testeNome2 = 'Costa'
console.log(testeNome+testeNome2)
console.log(testeNome.trim()+testeNome2)

console.log(resultName)




// let namesResult = []
// let array = []


// let searchNames = names.forEach( name => {
//     nameLowerCase = name.toLowerCase();
//     let index = nameLowerCase.indexOf('')
//     if (index >= 0){array = [...array,name]}
    
// })

 
// console.log(array)
