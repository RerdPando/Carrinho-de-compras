//Adiciona o produto ao carrinho (estudar função).
function adicionar() {

    //get nome, valor, quantidade:
    let produto = document.getElementById('produto').value;
    let nomeDoProduto = produto.split('-')[0];
    let valorDoProduto = produto.split('R$')[1];
    let quantidadeDeProdutos = document.getElementById('quantidade').value;

    //set subtotal 
    let subTotal = valorDoProduto * quantidadeDeProdutos;

    let produtosDoCarrinho = document.getElementById('lista-produtos');
    produtosDoCarrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeDeProdutos}x</span> ${nomeDoProduto} <span class="texto-azul">R$${valorDoProduto}</span>
  </section>`;

    let valorDoCarrinho = document.getElementById('valor-total');
    let valorAtual = valorDoCarrinho.value.split('$')[1];
    let valorFinal = valorAtual + subTotal;
    valorDoCarrinho.textContent = `R$${valorFinal}`;
};

function limpar() {

    //limpa a lista de produtos no carrinho
    let classPricipal = document.querySelector('.carrinho__produtos__produto');
    let limparSpans = classPricipal.querySelectorAll('span');

    //limpa o valor total do carrinho
    document.getElementById('valor-total').textContent = 'R$0.00';

    limparSpans.forEach(function (span) {
        classPricipal.textContent = '';
        classPricipal.remove(span);
    });


};