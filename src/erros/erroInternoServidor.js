class erroInternoServidor extends Error {
    constructor(mensagemErro = "Erro interno no servidor", statusErro = 500) {
        this.mensagemErro = mensagemErro
        this.statusErro = statusErro
    }
    exibindoErro(respostaErro) {
        respostaErro.status(this.statusErro).send({ problema: this.mensagemErro, status: this.statusErro })
    }
}

export default erroInternoServidor