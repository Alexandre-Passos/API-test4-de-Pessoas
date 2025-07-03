import express from "express"
import mongoose from "mongoose"

const recebendoErros = (erro, req, res, next) => {
    if (erro = mongoose.Error.CastError) {
        res.status(501).send("Muito erros detectado");
    } else {
        console.log("Algum erro diferente detectado");
    }
}
export default recebendoErros
