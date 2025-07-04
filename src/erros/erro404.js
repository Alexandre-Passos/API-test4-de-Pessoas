import ErroInternoServidor from "./erroInternoServidor.js";

class Erro404 extends ErroInternoServidor {
    constructor(mensagemErro = "Página não encontrada") {
        super(mensagemErro, 404);
    }
}

export default Erro404