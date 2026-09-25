const amigos = []
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;
const whatsapp = cadastro.whatsapp;
const lista = document.getElementById("lista")
let editando = null;

cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    let item = [nome.value, nasc.value, whatsapp.value];
    if (editando == null){
    let check = amigos.find(item => item [0] == nome.Value);
        if (check == undefined){
            amigos.unshift(item);
            cadastro.reset();
        }else{
            alert(`${nome.value} já cadastrado.`);
        }
    }else{
        let amigo = amigos[editando]
        amigo [0] = nome.value;
        amigo [1] = nasc.Value;
        amigo [2] = whatsapp.value;
    }
    exibirLista();
});

function exibirLista(){
    let itens = "";
    for(let i = 0; i<amigos.length; i++){
        let item = amigos[i];

        let remover = `<button onclick="remover(${i})">remover</button>`
        let atualizar = `<button onclick="Atualizar(${i})">Atualizar</button>`

        let li = `<li>${item[0]} | ${item[1]} | ${item[2]} | ${remover} | ${atualizar} </li>`;

        itens = itens + li;

    }
    lista.innerHTML = itens;
}

function remover(i){
    let item = amigos[i];
    let check = confirm(`deseja realmente excluir ${item[0]}?`);
    if (check == true){
        amigos.slice(i,1);

    }
    exibirLista();
}

function atualizar(i){
    editando = i;
    let item = amigos[editando];
    nome.Value = item[0];
    nasc.Value = item[1];
    whatsapp.Value = item[2];

}