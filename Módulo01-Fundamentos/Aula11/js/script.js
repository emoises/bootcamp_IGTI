window.addEventListener('load', () => {
    doMap();
    doFilter()
    doForEach()
    doReduce()
    doFind()
    doSome()
    doEvery()
    doSort()
});
function doMap() {
    const nomeEmailArray = people.results.map(person => {
        return {
            name: person.name,
            email: person.email
        };
    });
    console.log(nomeEmailArray);
    return nomeEmailArray
};
function doFilter(){
    const olderThenAge = people.results.filter(person =>{
        return person.dob.age > 50;
    })
    console.log(olderThenAge)
};
function doForEach(){
    const mappedPeople = doMap();
    mappedPeople.forEach( person => {
        person.name.nameSize = person.name.title.length + person.name.first.length + person.name.last.length;
    });
    console.log(mappedPeople);  
};
function doReduce(){
    const totalAges = people.results.reduce((accumulator,current) => {
        return accumulator + current.dob.age;
    }, 0);
    console.log(totalAges)
};//Retorna a soma da idades de todas as pessoas no banco de dados  
function doFind() {
    const found = people.results.find( person => {
        return person.location.state === 'Minas Gerais';
    })
    console.log(found);
};// Retorna os dados de Idelfonso Martins
function doSome() {
    const found = people.results.some( person =>{
        return person.location.state ==='Amazonas';
    })
    console.log(found);
}//Retorna verdadeiro ou falso para o valor procurado. Aqui retorna falso.
function doEvery(){
    const every = people.results.every( person => {
        return person.nat === 'BR'
    });
    console.log(every);
};//Procura nos valores do banco de dados. Se todos forem iguais retorna verdadeiro.
function doSort(){
    const mappedNames = people.results.map(person =>{
        return {
            name: person.name.first
        }
    })
    .filter(person => person.name.startsWith('A'))
    .sort((a,b) => {
        return a.name.length - b.name.length
    });

    console.log(mappedNames)
};