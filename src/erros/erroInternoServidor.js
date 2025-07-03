class ErroInternoServidor extends Error {
    constructor(mensagemErro = "Erro interno no servidor", statusErro = 500) {
        this.mensagemErro = mensagemErro
        this.statusErro = statusErro
    }
    exibirErro(respostaErro) {
        respostaErro.status(this.statusErro).send({ problema: this.mensagemErro, status: this.statusErro })
    }
}

export default ErroInternoServidor