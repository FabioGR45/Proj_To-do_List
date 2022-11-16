const elementoLista = document.querySelector('ul');
const elementoInput = document.querySelector('input');
const elementoBotao = document.querySelector('button');
const elementoHr = document.querySelector('hr');
const elementoDeleteAll = document.querySelector('a');
const elementoTitle = document.querySelector('h1');

let tarefas = [
]

let luzOnOff = 0;

let btn = document.querySelector('.btn');
let body = document.querySelector('body');
btn.onclick = function(){
    body.classList.toggle('on');
    botaoBulbo()
}

function mostrarTarefas(){

    elementoLista.innerHTML = '';

    for(tarefa of tarefas){
        const elementoTarefa = document.createElement('li');
        const textoDaTarefa = document.createTextNode(tarefa);

        const elementoLink = document.createElement('a');
        const pos = tarefas.indexOf(tarefa)

        const linkText = document.createTextNode('X')
        elementoLink.appendChild(linkText)

        elementoLink.setAttribute('onclick', `deletaTarefa(${pos})`)
        

        elementoTarefa.appendChild(textoDaTarefa);
        elementoLista.appendChild(elementoTarefa);
        elementoTarefa.appendChild(elementoLink)
    }

}

mostrarTarefas();

function adicionarTarefas(){

    if(elementoInput.value == ''){
        alert("A tarefa não pode estar vazia!");
        return;
    }
    const textoDaTarefa = elementoInput.value
    tarefas.push(textoDaTarefa);

    mostrarTarefas()

    elementoInput.value = ''
    //tarefas = []

}

elementoBotao.setAttribute('onclick', 'adicionarTarefas()')

function deletaTarefa(pos){

    tarefas.splice(pos, 1)
    mostrarTarefas()

}

function deletaTodasTarefas(){

    tarefas = [];
    mostrarTarefas()

}



function botaoBulbo(){
    let bulbo = document.getElementById('bulboluz');
    let body = document.querySelector('body');
    let audio = document.querySelector('#audio');
    const elementoDeleteAll = document.querySelector('.deleteAll');

    if(luzOnOff == 1){
        audio.play();
        document.body.style.backgroundColor = "#fff";
        elementoDeleteAll.style.color = "#000";
        elementoTitle.style.color = "#000";
        luzOnOff = 0
    } else {
        audio.play();        
        document.body.style.backgroundColor = "#000";
        elementoDeleteAll.style.color = "#fff";
        elementoTitle.style.color = "#fff";
        luzOnOff = 1;
    }
}