import express from "express";
import Pessoas from "../controllers/controllPessoa.js";
const rotas = express.Router();

//Rota padrão
rotas.get("/", (req, res) => {
    console.log("Você está na rota padrão");
    res.status(200).send("Rota padrão");
})

//Outras rotas
rotas.get("/Pessoas", Pessoas.exibirPessoa);
rotas.get("/Pessoas/:id", Pessoas.procurarPessoaEspecifica);
rotas.post("/Pessoas/", Pessoas.cadastrarPessoa);

export default rotas;