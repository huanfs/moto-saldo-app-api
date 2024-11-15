import express from "express";

import { User } from "../models/user.js";

const setConfigurations = express.Router();

setConfigurations.post("/", async(req, res)=>{
    try{  
        const data = JSON.stringify(req.body);
        const updated = await User.update( // REALIZA UMA ATUALIZAÇÃO DE DADOS EM 'DATA' BUSCANDO PELOS PARÂMETROS DE 'NAME' E 'PASSWORD'
            {data: data},
            {where: {name:req.body.userName, password: req.body.userPassword}}
        ).then((response)=>{console.log("deu certo")}) // IMPRIME NO CONSOLE UMA MENSAGEM AFIRMATIVA CASO A SOLICITAÇÃO SEJA UM SUCESSO
    }
    catch(err){console.log("erro " + err)} // IMPRIME NO CONSOLE UMA MENSAGEM NEGATIVA E O ERRO GERADO COM A SOLICITAÇÃO EM CASO DE FALHA
})

export default setConfigurations;