const bd = require('./bdMock')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:true}));

app.get('/produtos', (req, res) => {
    res.send(bd.getProdutos());
})

app.get('/produtos/:id', (req,res)=>{
    console.log(req);
    res.send(bd.getProduto(req.params.id))
})

app.post('/produtos/novo', (req, res)=>{
    const produto = bd.salvarProdutos({
        nome:req.body.nome,
        preco:req.body.preco,
        img:req.body.img
    });
    res.send(produto);
})

app.delete('/produtos/:id' , (req,res) => {
    const produto = bd.excluirProduto(req.params.id);
    res.send("O produto " + produto.nome + " foi excluído com suceso.");
});

app.put('/produtos/editar/:id' , (req,res) =>{
    const produto = {
        nome:req.body.nome,
        preco:req.body.preco,
        img:req.body.img
    };
    const produtoAtualizado = bd.editarProduto(req.params.id , produto);
    res.send(`O produto ${produtoAtualizado.nome} foi atualizado com sucesso`);
})

app.listen(3001 , ()=> console.log("Servidor iniciado"))