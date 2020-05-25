import { createUserCard, createStatCard } from './createHTML.js'
let numberFormat = Intl.NumberFormat('pt-BR')

export function renderSumPeople(sumUser) {
    let toInsertUserHTML = `<div class="span-container">
                            <h3>${sumUser} usuário(s) encontrados(s)</h3>
                        </div>`;
    return toInsertUserHTML
} 
export function renderPeopleCardHTML(array, peopleCardHTML, userContainer) {
    peopleCardHTML = `<h3 id="user-title">${array.length} usuário(s) encontrado(s)</h3>`

    array.forEach(person => {
        let personCardHTML = createUserCard(person.name, person.age, person.email, person.imgURL);
        peopleCardHTML += personCardHTML
        return peopleCardHTML
    })
    userContainer.innerHTML = peopleCardHTML
}
export function renderStats(array, DOMElement, statCardHTML, sumMale, sumFemale, sumAges, averageAges) {
    let statHTMLLocal = `<h3 id="stat-title">Estatística</h3>`
    sumMale = array.filter( element => {
        return element.gender === 'male';
    });
    sumFemale = array.filter( element => {
        return element.gender === 'female';
    });
    sumAges = array.reduce( (acc, cur) => {
        return acc +cur.age
    },0)
    averageAges = sumAges/array.length;

    statCardHTML = createStatCard(sumMale.length, sumFemale.length, formatNumber(sumAges), formatNumber(averageAges.toFixed(2)))
    DOMElement.innerHTML = statHTMLLocal + statCardHTML;
    
}

function formatNumber(number) {
    return numberFormat.format(number)

}