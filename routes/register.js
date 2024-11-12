import express from "express";

import { User } from "../models/user.js";

const register = express.Router();

/*ROTA DE REGISTRO PARA NOVO USUÁRIO*/ 
register.post("/", async(req, res)=>{
    try{
        const name = req.body.name;
        const password = req.body.password;

        const newUser = await User.create({ // CRIA UM NOVO USUÁRIO RECEBENDO VALORES PARA 'NAME' E 'PASSWORD'
        name: name,
        password: password,
    })
    if (newUser){ // CASO O NOVO USUÁRIO SEJA ADICIONADO COM SUCESSO RETORNA O CÓDIGO DE ESTATUS DE SUCESSO E IMPRIME NO CONSOLE UMA MENSAGEM DE SUCESSO
        res.sendStatus(200);
        console.log("usuário criado")
    }
    else{ // CASO HAJA ALGUM ERRO NA CRIANÇÃO DO NOVO USUÁRIO ENVIA AO CLIENT O ESTATUS DE ERRO 401 E IMPRIME NOP CONSOLE UMA MENSAGEM DE ERRO
        res.sendStatus(401);
        console.log("erro ao criar usiário")
    }
    }
    catch(err){
        console.log(err);
        res.sendStatus(400);
    } // CASO A SOLICITAÇÃO NÃO POSSA SER REALIZADA, IMRPIME NO CONSOLE O ERRO
});

export default register;