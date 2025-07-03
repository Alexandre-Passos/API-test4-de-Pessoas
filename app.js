import express from "express";
import rotas from "./src/routers/routes.js";
import recebendoErros from "./src/middleware/recebendoErros.js"
const server = express();

server.use(express.json());

server.use(rotas);
server.use(recebendoErros)
export default server;