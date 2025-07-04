import express from "express";
import rotas from "./src/routers/routes.js";
import receberErro404 from "./src/middleware/receberErro404.js";
import recebendoErros from "./src/middleware/recebendoErros.js"
const server = express();

server.use(express.json());
server.use(rotas);
server.use(receberErro404);//Rotas para receber o famoso erro 404
server.use(recebendoErros);// Rotas para tratar a maioria dos erros
export default server;