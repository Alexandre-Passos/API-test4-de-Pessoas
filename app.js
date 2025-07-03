import express from "express";
import rotas from "./src/routers/routes.js";
const server = express();

server.use(express.json());

server.use(rotas);
export default server;