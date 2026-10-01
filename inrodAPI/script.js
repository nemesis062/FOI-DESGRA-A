let colecaoMidia = []

async function carregarCatalago(){
const container_card = document.getElementById('catalogo-grid');
container_card.innerHTML = "<p>Carregando itens, aguarde.</p>";


try{
//método GET. fetch() ja possui get como padrão
const resposta = await fetch('dados.Json');
if(!resposta.ok) throw new Error('Erro ao buscar dados');
//Transforma os dados no formato json()
colecaoMidia = await resposta.json();
rendenrizarGrid(colecaoMidia);


}catch(erro){
container_card.innerHTML = `<p style="color: #ef4444;"Erro ao crregar catálogo: ${erro.message}</p>`;
}


function rendenrizarGrid(lista){
const container = document.getElementById('catalogo-grid');
container.innerHTML = "";

if(lista.length === 0){
container.innerHTML = `<p class="info">Nenhum item cadastrado
nesta categoria</p>`;
return;
}

lista.forEach(item =>{
const card = document.createElement('div');
card.classname = 'card';

card.innerHTML = `
${item.capa ?` <img src="${item.capa}" alt="${item.titulo}" class = "capa-midia">`:''}
<div>
<span class = "tag-categoria">${item.plataforma}</span>
<h3>${item.titulo}</h3>
<p class="info">Plataforma: ${item.plataforma}</p>
<p clas="info">Nota: <span class="nota">${item.nota.toFixed(1)}</span></p>
<p class="info">Status: <strong>${item.status}</strong></p>
</div>
`;
    container.appendChild(card);
});

}


} document.addEventListener('DOMContentLoaded', carregarCatalago);