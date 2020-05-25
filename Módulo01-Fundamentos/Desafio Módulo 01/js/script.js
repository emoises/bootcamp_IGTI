import { loadingCard, createUserCard, createStatCard }  from './handlers/createHTML.js'
import { renderSumPeople, renderStats, renderPeopleCardHTML } from './handlers/util.js';
let inputData = '';
let ignoreCodes = ['ControlLeft', 'ControlRight','ShiftLeft', 'ShiftRight', 'CapsLock', 'Control', 'AltLeft', 'AltRight', 'Space', 'MetaLeft']
let submitBtn = null;
let peopleTitle = null;
let userContainer = [];
let statContainer = [];
let people = [];
let userCardHTML= ``;
let loadUsers = {};
let loadStats = {};
let peopleCardHTML = ``;
let statCardHTML = ``;
let sumMale= ``;
let sumFemale=``;
let sumAges = ``;
let averageAges = ``;
let filterPeopleSearch = [];


window.addEventListener('load', () => {
    inputData = document.querySelector('#inputPeople');
    submitBtn = document.querySelector('.link');
    peopleTitle = document.querySelector('#user-title');
    userContainer = document.querySelector('#user-container');
    statContainer = document.querySelector('#statistic-container'); 
    inputData.focus()
    fetchPeople();

    render()
    

});

function render(){
    preventFormSubmit();
    inputData.addEventListener('keyup', enableBtn);
    inputData.addEventListener('keydown', handleTyping);
    submitBtn.addEventListener('click', handleTyping);
    enableBtn();
}
async function fetchPeople(){
    const res = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo');
    const json = await res.json()
    people = json.results.map( person => {
        const { dob, email, gender, name, picture} = person
        return {
            name,
            age: dob.age,
            email,
            gender,
            imgURL: picture.large
        };
    });
  
};

function preventFormSubmit() {
    function handleForSubmit(event) {
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleForSubmit)
}
function handleTyping(event){
    console.log(event)
    if(inputData.value !== '' && event.key === 'Enter' || event.type === 'click'){
        
        let interval = setTimeout( () => {
            loadUsers = loadingCard('user-title', 'Nenhum usuário encontrado', '100 usuário(s) encontrado(s)');
            userContainer.innerHTML = loadUsers.loading
            loadStats = loadingCard('stat-title', 'nenhum dado encontrado', 'Estatísticas');
            statContainer.innerHTML = loadStats.loading
        })
        let searchIndex = inputData.value;
        let sortedArray = [];
        //recebe os valor digitados no input e filtra os dados
        people.forEach( person => {
            let firsLowCase = person.name.first.toLowerCase();
            let lastLowCase = person.name.last.toLowerCase();
            let fullnameLowCasa = firsLowCase + ' ' + lastLowCase;
            if (firsLowCase.indexOf(searchIndex.toLowerCase().trim()) >= 0
                || lastLowCase.indexOf(searchIndex.toLowerCase().trim()) >= 0
                || fullnameLowCasa.indexOf(searchIndex.toLowerCase().trim()) >= 0) {

                sortedArray = [...sortedArray, person]
                
            };
        });
        filterPeopleSearch = sortedArray.sort((a, b) => {
            return a.name.last.localeCompare(b.name.last)
        }).filterPeopleSearch = sortedArray.sort((a, b) => {
            return a.name.first.localeCompare(b.name.first)
        })

        console.log(sortedArray)
        console.log(filterPeopleSearch)

    } 

    const interval = setTimeout(() => {
        if (filterPeopleSearch.length > 0){
            renderPeopleCardHTML(filterPeopleSearch, peopleCardHTML, userContainer);
            renderStats(filterPeopleSearch, statContainer, statCardHTML, sumMale, sumFemale, sumAges, averageAges)
            inputData.focus()

        }else{
            let userTextHYML = `<h3 id="user-title">Nenhum usuário encontrado</h3>`;
            let statTextHYML = `<h3 id="stat-title">Nenhum dado encontrado</h3>`;
            userContainer.innerHTML = userTextHYML;
            statContainer.innerHTML = statTextHYML;
            inputData.focus()

        }
    }, 1000)
    render()
}
function enableBtn(event){

    if(inputData.value === ''){
        submitBtn.innerHTML = `<a id="submitBtn" disabled=true class="waves-effect waves-light btn">Buscar</a>`
    }else{
        submitBtn.innerHTML = `<a id="submitBtn" class="waves-effect waves-light btn">Buscar</a>`
    }
}
