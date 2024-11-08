import express from "express";

import  authenticate  from "./routes/authenticate.js";
import  register  from "./routes/register.js";
 import  setConfigurations  from "./routes/setConfigurations.js";
 import  getUserData  from "./routes/getUserData.js";
 import  updateData  from "./routes/updateData.js";

const PORT = 8182; // PORTA

const app = express(); // APP

/* MIDDLEWARES */
app.use(express.json())

import cors from "cors";
app.use(cors({
    origin: "http://localhost:5173"
  }));
/* MIDDLEWARES */

/* ROTA PARA AUTENTICAÇÃO DO USUÁRIO */
app.use("/authenticate", authenticate);

/* ROTA QUE CRIA USUARIO E SENHA ( REGISTRO DE USUÁRIO ) */
app.use("/createUser", register); //register

/* ROTA PARA SALVAR NO BANCO DE DADOS AS CONFIGURAÇÕES DO USUÁRIO */
app.use("/createOptions", setConfigurations); //setConfigurations

/* FUNÇÃO QUE RETORNA TODAS AS INFORMAÇÕES E CONFIGURAÇÕES DE USUÁRIO */
app.use("/getData", getUserData); //getUserData

/* ROTA QUE ATUALIZA AS INFORMAÇÕES E CONFIGURAÇÕES DO USUÁRIO NO BANCO DE DADOS */
app.use("/updateData", updateData);

/* ROTA EM CASO DE ERRO */
app.get("*", async(req, res)=>{
    res.status(404).send("não encontramos o que você está procurando :'-(");
})

app.listen(PORT); //servidor rodando na porta 8182