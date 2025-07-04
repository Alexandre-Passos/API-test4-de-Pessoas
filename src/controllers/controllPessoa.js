import mongoose from "mongoose";
import ModeloPessoa from "../models/Pessoa.js";

class Pessoas {
    static exibirPessoa = async (req, res) => {
        try {
            const pessoas = await ModeloPessoa.find();
            res.status(200).send(pessoas);
        } catch (error) {
            next(error)
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
            const novaPessoa = await ModeloPessoa.create(req.body);

            res.status(201).json({ mensagem: "Pessoa criada com sucesso!.", pessoa: novaPessoa })
        } catch (error) {
            next(error)
        }
    }

    static atualizarPessoaEspecifica = async (req, res, next) => {
        try {
            const id = req.params.id;
            const atualizar = await ModeloPessoa.findByIdAndUpdate(id, { $set: req.body });
            res.status(201).json({ mensagem: "Pessoa atualizada com sucesso.", pessoa: atualizar })
        } catch (error) {
            next(error)
        }
    }
    static excluirPessoaEspecifica = async (req, res, next) => {
        try {
            const id = req.params.id;
            await ModeloPessoa.findByIdAndDelete(id);
            res.status(200).json({ mensagem: "Pessoa excluída com sucesso." });
        } catch (error) {
            next(error)
        }
    }
}

export default Pessoas;
