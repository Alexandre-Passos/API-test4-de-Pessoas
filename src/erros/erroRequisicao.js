import erroInternoServidor from "./erroInternoServidor.js";

class RequisicaoIncorreta extends erroInternoServidor {
    constructor(mensagemErro = "Um ou mais dados forncecidos estão incorretos", statusErro = 400) {
        super(mensagemErro, statusErro)
    }
}

export default RequisicaoIncorreta