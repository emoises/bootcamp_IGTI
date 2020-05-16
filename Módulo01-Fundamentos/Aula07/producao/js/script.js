console.log('olá, mundo');

var title = document.querySelector('h1');

title.textContent = "Modificado por Silva"

var r = '';
let dia = 4;

switch(dia){
    case 1: r = 'Domingo'; break;
    case 2: r = 'Segunda'; break;
    case 3: r = 'Terça'; break;
    case 4: r = 'Quarta'; break;
    case 5: r = 'Quinta'; break;
    case 6: r = 'Sexta'; break;
    case 7: r = 'Sábado'; break;
};

console.log(r);
var a = 6;
var b = 5;

if (a > b){
    console.log( a + ' é maior que ' + b)
}else{
    if(b > a){
        console.log(a + ' é maior que ' + b)
    }else{
        console.log(a + ' é igual a ' + b)

    }
};

var resposta = a > b ? a + ' é maior que(ternário) ' + b : a < b ? b + ' é maior que(ternário) ' + a : a + ' é igual a (ternário) ' + b;
console.log(resposta);
//somatório com while

var numeorAtual = 1;
var soma = 0
while (numeorAtual <= 10){
    
    console.log(numeorAtual)
    soma +=numeorAtual;
    numeorAtual++
};
console.log(soma);
numeorAtual = 1;
soma = 0;
do {
    soma += numeorAtual;
    numeorAtual++
} while (numeorAtual <= 10);

console.log(soma);
soma = 0;

for(numeorAtual = 1; numeorAtual <=10; numeorAtual++){
    soma += numeorAtual
}

console.log(soma);