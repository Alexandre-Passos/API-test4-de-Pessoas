import express from "express"
import mongoose from "mongoose"
import ErroInternoServidor from "../erros/erroInternoServidor";
import RequisicaoIncorreta from "../erros/erroRequisicao";
import ErroValidacao from "../erros/erroValidacao";

const recebendoErros = (erro, req, res, next) => {
    if (erro instanceof mongoose.Error.CastError) {
        new RequisicaoIncorreta().exibirErro(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new ErroValidacao(erro).exibirErro(res);
    } else {
        new ErroInternoServidor().exibirErro(res);
    }
}
export default recebendoErros
