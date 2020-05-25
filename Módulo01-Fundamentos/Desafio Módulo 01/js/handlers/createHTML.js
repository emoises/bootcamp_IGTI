export function createUserCard( name, age, email, imgUrl ){
    return `<div class="col s12 m7">
                <div class="card horizontal">
                    <div class="card-image">
                        <img src=${imgUrl}>
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <p>${name.first} ${name.last}, ${age} anos </p>
                            <p>${email} </p>
                        </div>
            
                    </div>
                </div>
            </div>`
}
export function loadingCard(id,loadingTitle, loadedTitle){
    let loading = `<h3 id="${id}">${loadingTitle}</h3>
            <div class="preloader-wrapper big active">
                <div class="spinner-layer spinner-green-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                    <div class="gap-patch">
                        <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>`

    let loaded = `<h3 id="${id}">${loadedTitle}</h3>`

    return { loading: loading, loaded:loaded}
}

export function createStatCard( contMale, contFemale, sumAges, averageAges ) {
    return `<div id="statistic-list" class="card horizontal">
                <ul>
                    <li>sexo masculino: ${contMale}</li>
                    <li>sexo feminino: ${contFemale}</li>
                    <li>soma das idades: ${sumAges}</li>
                    <li>Média das idades: ${averageAges}</li>
                </ul>
            </div>`
}