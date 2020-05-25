window.addEventListener('load', () => {
    doFetch();
    doFetchAsync();
    executionDivisionPrimise();
    executionDivisionPrimiseAsyncAwait();
});

function doFetch(){
    fetch('https://api.github.com/users/rrgomide').then(res => {
        res.json().then(data => {
            showData(data);
        });
    }).catch(error => {
        console.log('Erro na requisição')
    });
}
async function doFetchAsync() {
    const res = await fetch('https://api.github.com/users/rrgomide');
    const json = await res.json();
    console.log(json)
}


function showData(data){
    const user = document.querySelector('#user')
    user.textContent = data.login + ' ' + data.name;

}

function divisionPromise (a,b) {
    return new Promise((resolve,reject) =>{
        if (b === 0 ) {
            reject('não é possível dividir por zero.')
        }

        resolve(a / b);
    })
}
function executionDivisionPrimise(){
    divisionPromise(12,0)
    .then( result => {
        console.log(result);
    })
    .catch( errorMessage =>{
        console.log('Falha na divisão ' + errorMessage);
    });
};

async function executionDivisionPrimiseAsyncAwait() {
    const division = await divisionPromise(12,2);

    console.log(division)
}