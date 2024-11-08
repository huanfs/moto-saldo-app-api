import express from "express";

import { User } from "../models/user.js";

const getUserData = express.Router();

/* FUNÇÃO QUE RETORNA TODAS AS INFORMAÇÕES E CONFIGURAÇÕES DE USUÁRIO */
getUserData.post("/", async (req, res) => {
    try {
        const name = req.body.name;
        const password = req.body.password;

        const getData = await User.findOne({ // BUSCA UM USUÁRIO NO BANCO DE DADOS ATRAVÉS DE 'NAME'E E 'PASSWORD'
            where: { name: name, password: password }
        });
        if (getData) {
            res.send(getData); // ENVIA O OBJETO DIRETAMENTE AO CLIENT CASO SEJA ENCONTRADO
        } else {
            res.sendStatus(404); // RETORNA O ESTATUS DE ERRO 404 CASO O USUÁRIO NÃO SEJA ENCONTRADO
        }
    } catch (err) { // IMPRIME UMA MENSAGEM NEGATIVA E O ERRO CASO A SOLICITAÇÃO SEJA FALHA E ENVIA AO CLIENT O ESTATUS DE ERRO 500
        console.error("Erro no back-end", err);
        res.sendStatus(500); 
    }
});

export default getUserData;