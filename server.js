import 'dotenv/config'
import server from "./app.js";
import mongoose from "mongoose";


//Conexão com o Mongoose DB
mongoose.connect(process.env.SENHA_DO_MONGO_DB)
const conectadoDB = mongoose.connection;
conectadoDB.on("error", (err) => { console.log(`Aconteceu um erro interno de conexão: ${err}.`) });
conectadoDB.once("open", () => { console.log("Tudo ok com a conexão.") });


server.listen(3000, () => {
    console.log("tudo ok");
})