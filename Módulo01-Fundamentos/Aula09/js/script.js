window.addEventListener('load', start);

var globalNames = ['um','dois','três','quatro','cinco'];
var inputName = null;
var isEditing = false;
let currentIndex = null;


function start() {
    inputName = document.querySelector('#inputName');
    preventFormSubmit();
    activateInput();
    renderList();
}

function preventFormSubmit(){
    function handleForSubmit (event){
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleForSubmit)
}



function activateInput() {
    function insertName(newName){
        globalNames.push(newName);
        event.target.value = ""
        // renderList();
    }
    function editName(newName) {
        globalNames[currentIndex] = newName;
        inputName.value = '';
        // renderList();
    }
    
    function handleTyping(){
        var hasText = !!event.target.value && event.target.value.trim() !=='';
        if(!hasText){
            inputName.value = '';
            return
        }
        if(event.key=='Enter'){
            if(isEditing){
                editName(event.target.value);   
            }else{
                insertName(event.target.value);
            }
            isEditing = false;
            
        }
        renderList()
    }
    inputName.addEventListener('keyup', handleTyping);
    inputName.focus();

}

function renderList () {
    function deleteButton(i){
        function deleteName(){
            globalNames.splice(i,1);
            renderList();
        }
            var button = document.createElement('button');
            button.classList.add('deleteButton');
            button.textContent = 'X'

            button.addEventListener('click', deleteName)
        return button;
    }
    function createSpan(name, index){
        function editItem(){
            inputName.value = name;
            inputName.focus();
            isEditing = true;
            currentIndex = index;
        }
        var span = document.createElement('span');
        span.classList.add('clickable');
        span.textContent = name;
        span.addEventListener('click',editItem)
        return span
    }


    var divLista = document.querySelector('.names')
    divLista.innerHTML = null
    var ul1 = document.createElement('ul');

    for (i=0; i<globalNames.length;i++) {

        var liElement = document.createElement('li');

        var button = deleteButton(i);
        var span = createSpan(globalNames[i],i)

        

        liElement.appendChild(button);
        liElement.appendChild(span);

        ul1.appendChild(liElement)

    }
    // globalNames.forEach(element => {
        
        
    // });
    divLista.appendChild(ul1)
}