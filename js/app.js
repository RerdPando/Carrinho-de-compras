let valorAtual = 0;

//Adiciona o produto ao carrinho (estudar função).
function adicionar() {

    //get nome, valor, quantidade:
    let produto = document.getElementById('produto').value;
    let nomeDoProduto = produto.split('-')[0];
    let valorDoProduto = produto.split('R$')[1];
    let quantidadeDeProdutos = document.getElementById('quantidade').value;

    //verifica se a quantidade foi adicionada
    if(quantidadeDeProdutos <= 0){
      alert('Coloque uma quantidade!');
      return;
    };
    //set subtotal 
    let subTotal = valorDoProduto * quantidadeDeProdutos;

    let produtosDoCarrinho = document.getElementById('lista-produtos');
    produtosDoCarrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeDeProdutos}x</span> ${nomeDoProduto} <span class="texto-azul">R$${subTotal}</span>
  </section>`;

    let valorDoCarrinho = document.getElementById('valor-total');
    valorAtual = valorAtual + subTotal;
    document.getElementById('quantidade').value = 0;
    valorDoCarrinho.textContent = `R$${valorAtual}`;
};

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('quantidade').value = 0;
    document.getElementById('valor-total').textContent = `R$ 0`;
}