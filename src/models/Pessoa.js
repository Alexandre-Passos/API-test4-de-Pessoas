import mongoose from "mongoose";

const EsquemaPessoa = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: [true, "O nome é obrigatório"] },
    idade: { type: Number, required: [true, "A idade é obrigatória"] },
    nascionalidade: { type: String, default: "Nascionalidade não informada" },
    sexo: { type: String, default: "Sexo não informado" },
    profissao: { type: String },

}, { versionKey: false })

const ModeloPessoa = mongoose.model("Pessoas", EsquemaPessoa);

//required: [true, "A nacionalidade é obrigatória"]

export default ModeloPessoa;