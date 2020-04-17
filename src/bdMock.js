const novoId = {
  _id: 1,
  get id() {
    return this._id++;
  },
};

const produtos = {};

const salvarProdutos = (produto) => {
  console.log(produto);
  if (!produto.id) produto.id = novoId.id;
  produtos[produto.id] = produto;
  return produto;
};

const getProduto = (id) => {
  return produtos[id] || {};
};

const getProdutos = () => {
  return Object.values(produtos);
};

const excluirProduto = (id) => {
  const produto = produtos[id];
  delete produtos[id];
  return produto;
};

const editarProduto = (id, produto) => {
  produto.id = id;
  return (produtos[id] = produto);
};

module.exports = {
  getProduto,
  getProdutos,
  salvarProdutos,
  excluirProduto,
  editarProduto,
};
