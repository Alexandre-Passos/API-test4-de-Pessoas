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
    static procurarPessoaEspecifica = async (req, res, next) => {
        try {
            const acharPessoa = await ModeloPessoa.findById(req.params.id);
            res.status(200).send(acharPessoa);
        } catch (error) {
            next(error)
        }
    }

    static cadastrarPessoa = async (req, res, next) => {
        try {
            const novaPessoa = new ModeloPessoa(req.body)
            const adicionarPessoa = await novaPessoa.save()

            res.status(201).json({ mensagem: "Pessoa criada com sucesso!.", pessoa: novaPessoa })
        } catch (error) {
            next(error)
        }
    }
}

export default Pessoas;
