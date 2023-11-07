let valorDoCarrinho = 0;

//Adiciona o produto ao carrinho (estudar função).
function adicionar() {

    //Armazena o valor inserida no campo "quantidade"
    let quantidadeDeProdutos = document.getElementById('quantidade').value;

    //Verificação para caso o cliente não adicione a quantidade.
    if (quantidadeDeProdutos => 0) {
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

        //Adiciona o valor total do produtos do carrinho.
        let novoValor = valorDoCarrinho + (precoDoProduto * quantidadeDeProdutos);
        valorDoCarrinho = novoValor;
        document.getElementById('valor-total').textContent = `R$${novoValor}`;
    } else {
        alert('Adicione uma quantidade para adicionar!');
    }
};