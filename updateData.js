import express from "express";

import { User } from "../models/user.js";

const updateData = express.Router();

updateData.put("/", async(req, res)=>{
    try{
        const name = req.body.name;
        const password = req.body.password;
        const data = req.body.data;

        const updateUser = User.update({data:data}, { // ATUALIZA OS DADOS NA COLUNA 'DATA' PROCURANDO PELO NOME E SENHA DO USUÁRIO
            where: {name:name, password:password}
        })

        if(updateUser){ // CASO O USUÁRIO SEJA ENCONTRADO E DATA SEJA ATUALIZADO RETORNA O ESTATUS DE SUCESSO 200
            res.sendStatus(200)
        }
        else{ // DO CONTRÁRIO RETORNA O ESTATUS DE ERRO 400
            res.sendStatus(400)
        }
    }
    catch(err){ // POR FIM, IMPRIME NO CONSOLE A MENSAGEM DE ERRO E RETORNA O ESTATUS DE ERRO AO CLIENT
        console.log("erro na atualização" + err)
        res.sendStatus(400)
    }
});

export default updateData;