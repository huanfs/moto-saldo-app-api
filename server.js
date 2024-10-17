import express from "express";

import { User } from "./models/user.js"; //modelo do usuario (nome e senha);
import { Apps } from "./models/apps.js"; //APLICATIVOS (QUAIS TRABALHA);
import { Goals } from "./models/goals.js"; //tabela de obhjetivos (dinheiro e tempo e finais de semana);
import { Current } from "./models/current.js"; //tabela de ganhos e gastos totais;

const PORT = 8182; // porta

const app = express(); // APP


/*middlewares*/
import bodyParser from "body-parser";
app.use(bodyParser.json());

import cors from "cors";
app.use(cors("http://localhost:5173"))
/*middlewares*/

app.get("/", async(req, res)=>{
    res.send("bem vindo á api do moto saldo  app");
})

app.post("/authenticate", async(req, res)=>{
    const name = req.body.name;
    const password = req.body.password;
    try{
        const response = await User.findOne({where:{name:name}})
        .then((response)=>{res.send(response)})
    }catch(err){console.log("erro " + err)}
})


app.listen(PORT);