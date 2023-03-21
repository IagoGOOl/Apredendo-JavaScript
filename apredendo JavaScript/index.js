const Lista = document.querySelector('ul');
const entrada = document.querySelector('#entrada');
const botao = document.querySelector('#botao');

const produtos = [];
const produtos_localHis = JSON.parse(localStorage.getItem('list_produtos'));

function adicionarProduto() {
	const texto_produto = entrada.value;

	console.log('Entranda: ', texto_produto);

	produtos.push(texto_produto);
	entrada.value = '';
	salvarNoLocalStorage();

	mostrarProduto();
}

botao.setAttribute('onclick', 'adicionarProduto()');

function salvarNoLocalStorage() {
	localStorage.setItem('list_produtos', JSON.stringify(produtos));
}

function mostrarProduto() {
	Lista.innerHTML = '';

	for (let produto of produtos) {
		const lista_produto = document.createElement('li');
		const texto_produto = document.createTextNode(produtos);

		const ProdutoLnk = document.createElement('a');
		const count = produtos.indexOf(produto);

		const RemoveText = document.createTextNode('remover');
		ProdutoLnk.appendChild(RemoveText);

		ProdutoLnk.setAttribute('href', '#');

		ProdutoLnk.setAttribute('onclick', `deletaproduto(${count})`);

		lista_produto.appendChild(texto_produto);
		Lista.appendChild(lista_produto);
		lista_produto.appendChild(ProdutoLnk);
	}
}

mostrarProduto();

function deletaproduto(pos) {
	produtos.splice(pos, 1);
	mostrarProduto();
	salvarNoLocalStorage();
}
