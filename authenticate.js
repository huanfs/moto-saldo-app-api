import express from "express";

import {User} from "../models/user.js";

const authenticate = express.Router();

authenticate.post("/", async(req, res)=>{
    const name = req.body.name;
    const password = req.body.password;
    try{
        const user = await User.findOne({ // REALIZA A BUSCA PELO USUÁRIO ATRAVÉS DE 'NAME' E 'PASSWORD'
            where:{name:name, password:password}
        })
        if(user){ // BLOCO EXECUTADO AO ENCONTRAR O USUÁRIO
            res.send({
                name: user.name,
                password:user.password,
                data:user.data
            }) 
            console.log("achou")
        }
        else{ // QUANDO O USUÁRIO NÃO É ENCONTRADO NO SERVIDOR RETORNA O ESTATUS DE ERRO 404 ( NOT FOUND )
            res.sendStatus(404)
            console.log("não encontrado")
        }
    }catch(err){
        res.send(err) // POR FIM SE A SOLICITAÇÃO DER ERRO RETORNA O ERRO
    }
})

export default authenticate;