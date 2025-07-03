import mongoose from "mongoose"
import ErroInternoServidor from "../erros/erroInternoServidor.js";
import RequisicaoIncorreta from "../erros/erroRequisicao.js";
import ErroValidacao from "../erros/erroValidacao.js";

const recebendoErros = (erro, req, res, next) => {
    if (erro instanceof mongoose.Error.CastError) {
        new RequisicaoIncorreta().exibirErro(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new ErroValidacao(erro).exibirErro(res);
    } else if (erro instanceof Erro404) {
        erro.exibirErro(res)
    }
    else {
        new ErroInternoServidor().exibirErro(res);
    }
}
export default recebendoErros
