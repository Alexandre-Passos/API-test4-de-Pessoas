import ErroInternoServidor from "./erroInternoServidor.js";

class Erro404 extends ErroInternoServidor {
    constructor() {
        super("Página não encontrada", 404)
    }
}

export default Erro404