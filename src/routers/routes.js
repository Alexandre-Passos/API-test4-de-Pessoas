import express from "express";
import Pessoas from "../controllers/controllPessoa.js";
const rotas = express.Router();

//Rota padrão
rotas.get("/", (req, res) => {
    console.log("Você está na rota padrão");
    res.status(200).send("Rota padrão");
})


rotas.get("/Pessoas", Pessoas.exibirPessoa); //Exibir todas as Pessoas
rotas.get("/Pessoas/busca", Pessoas.pesquisaPessoaPorFiltro); //Pesquisar Pessoa por filtro
rotas.get("/Pessoas/:id", Pessoas.procurarPessoaEspecifica); //Procurar Pessoa por ID
rotas.post("/Pessoas/", Pessoas.cadastrarPessoa); //Cadastrar Pessoa
rotas.put("/Pessoas/:id", Pessoas.atualizarPessoaEspecifica); //Atualizar Pessoa
rotas.delete("/Pessoas/:id", Pessoas.excluirPessoaEspecifica); //Excluir Pessoa


export default rotas;