let listaDeProdutos = []

function adicionar(){
    let produto = document.getElementById('produto').value;
    let precoDoProduto = document.getElementById('produto').preco;

    let classe = document.querySelector(".carrinho__produtos__produto");
    let novoElemento = document.createElement(`<span class="texto-azul">1x</span> ${produto} <span class="texto-azul">R$${precoDoProduto}</span>`);

    classe.appendChild(novoElemento);
};