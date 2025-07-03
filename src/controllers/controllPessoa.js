import ModeloPessoa from "../models/Pessoa.js";

class Pessoas {
    static exibirPessoa = async (req, res) => {
        try {
            const pessoas = await ModeloPessoa.find();
            res.status(200).send(pessoas);
        } catch (error) {
            res.status(500).send("Algo de errado aconteceu");
        }
    }
    static procurarPessoaEspecifica = async (req, res) => {
        try {
            const acharPessoa = await ModeloPessoa.findById(req.params.id);
            res.status(200).send(acharPessoa);
        } catch (error) {
            res.status(500).send("Algo de errado aconteceu");
        }
    }

    static cadastrarPessoa = async (req, res) => {
        try {

        } catch (error) {
            res.status(500).send("O cadastro falhou");
        }
    }
}

export default Pessoas;
