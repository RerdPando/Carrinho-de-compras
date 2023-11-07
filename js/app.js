let valorDoCarrinho = 0;

//Adiciona o produto ao carrinho (estudar função).
function adicionar() {

    //Armazena o valor inserida no campo "quantidade"
    let quantidadeDeProdutos = document.querySelector('input').value;

    //Verificação do campo quantidade para não ficar vazio
    if (quantidadeDeProdutos == 0) {
        alert('Adicione uma quantidade para adicionar!');
    } else {
        //Pegar o nome do produto para adicionar no novo elemento.
        let produto = document.getElementById('produto').value;

        //Pegar o preço do produto para adicionar no novo elemento.
        let pegarPreco = document.getElementById('produto');
        precoDoProduto = pegarPreco.options[pegarPreco.selectedIndex].getAttribute("preco");
        precoDoProduto = parseInt(precoDoProduto);

        //Adiciona o produto a lista do carrinho 
        let AdicionarNovoPro = document.getElementById('lista-produtos');
        novoProduto = document.createElement('span');
        novoProduto.innerHTML = `<span class="texto-azul">${quantidadeDeProdutos}x</span> ${produto} <span class="texto-azul">R$${precoDoProduto}</span>`;

        AdicionarNovoPro.appendChild(novoProduto);

        //limpa o campo quantidade
        document.getElementById('quantidade').value = null;

        //Adiciona o valor total do produtos do carrinho.
        let novoValor = valorDoCarrinho + (precoDoProduto * quantidadeDeProdutos);
        valorDoCarrinho = novoValor;
        document.getElementById('valor-total').textContent = `R$${novoValor}`;
    }
};