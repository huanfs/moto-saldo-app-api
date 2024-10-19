import express from "express";

import { User } from "./models/user.js"; //modelo do usuario (nome e senha);
import { Data } from "./models/data.js"; //tabela com configurações do usuário

const PORT = 8182; // porta

const app = express(); // APP


/*middlewares*/
app.use(express.json())

import cors from "cors";
app.use(cors({
    origin: "http://localhost:5173"
  }));
/*middlewares*/




                        /*rota inicial*/
app.get("/", async(req, res)=>{
    res.send("bem vindo á api do moto saldo  app");
})




                        /* rota de autenticar (logIn) */
app.post("/authenticate", async(req, res)=>{
    const name = req.body.name;
    const password = req.body.password;
    try{
        const user = await User.findOne({where:{name:name, password:password}})
        if(user){ //bloco executado quando encontra o usuário
            res.send(user) // retorna automaticamente um status(200) de ok
            console.log("achou")
        }
        else{ // bloco executado quando não encontra o usuário
            res.sendStatus(404) // retorno um erro 404(not found)
            console.log("não encontrado")
        }
    }catch(err){
        res.send(err) // se a solicitação der erro retorna 404 (not)
    }
})
                        /*rota de criar usuario e senha*/
app.post("/createUser", async(req, res)=>{
    try{
        const name = req.body.name;
        const password = req.body.password;

        const newUser = await User.create({
        name: name,
        password: password,
    })
    if (newUser){
        res.sendStatus(200);
        console.log("usuário criado")
    }
    else{
        res.sendStatus(401);
        console.log("erro ao criar usiário")
    }
    }
    catch(err){console.log(err)}
})





                        /* rota criar o objeto com configurações do usuário*/
app.post("/createOptions", async(req, res)=>{
    try{
        const userData = req.body;
        Data.create({user_data: userData})
        .then((response)=>{res.send(response)})
    }
    catch ( err ) {
        res.send(err);
    }
})



app.listen(PORT); //servidor rodando na porta 8182