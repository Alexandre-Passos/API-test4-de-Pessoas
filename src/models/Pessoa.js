import mongoose from "mongoose";

const EsquemaPessoa = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: [true, "O nome é obrigatório"] }, 
    idade: { type: Number, required: [true, "A idade é obrigatória"] },
    nascionalidade: { type: String, required: [true, "A nacionalidade é obrigatória"] },
    sexo: { type: String },
    profissao: { type: String },

}, { versionKey: false })

const ModeloPessoa = mongoose.model("Pessoas", EsquemaPessoa);

export default ModeloPessoa;