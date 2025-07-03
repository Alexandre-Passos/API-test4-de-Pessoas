import Erro404 from "../erros/erro404.js"

function receberErro404(req, res, next) {
    const erro404 = new Erro404()
    next(erro404)
}

export default receberErro404