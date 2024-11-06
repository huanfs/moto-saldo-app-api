import express from "express";

import { User } from "./models/user.js"; // MODELO DA TABELA NO BANCO DE DADOS

const PORT = 8182; // PORTA

const app = express(); // APP

/* MIDDLEWARES */
app.use(express.json()) // EXPRESS.JSON() PARA LER CONTEÚDO DO TIPO JSON

import cors from "cors"; // PERMITE REQUISIÇÕES PROVENIENTES DA ROTA ESPECIFICADA
app.use(cors({
    origin: "http://localhost:5173"
  }));
/* MIDDLEWARES */

                        /* ROTA INICIAL */
app.get("/", async(req, res)=>{
    res.send("bem vindo á api do moto saldo  app");
})

                        /* ROTA PARA AUTENTICAÇÃO DO USUÁRIO */
app.post("/authenticate", async(req, res)=>{
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

                        /* ROTA QUE CRIA USUARIO E SENHA ( REGISTRO DE USUÁRIO ) */
app.post("/createUser", async(req, res)=>{
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
    catch(err){console.log(err)} // CASO A SOLICITAÇÃO NÃO POSSA SER REALIZADA, IMRPIME NO CONSOLE O ERRO
})

                    /* ROTA PARA SALVAR NO BANCO DE DADOS AS CONFIGURAÇÕES DO USUÁRIO */
app.post("/createOptions", async(req, res)=>{
    try{  
        const data = JSON.stringify(req.body);
        const updated = await User.update( // REALIZA UMA ATUALIZAÇÃO DE DADOS EM 'DATA' BUSCANDO PELOS PARÂMETROS DE 'NAME' E 'PASSWORD'
            {data: data},
            {where: {name:req.body.userName, password: req.body.userPassword}}
        ).then((response)=>{console.log("deu certo")}) // IMPRIME NO CONSOLE UMA MENSAGEM AFIRMATIVA CASO A SOLICITAÇÃO SEJA UM SUCESSO
    }
    catch(err){console.log("erro " + err)} // IMPRIME NO CONSOLE UMA MENSAGEM NEGATIVA E O ERRO GERADO COM A SOLICITAÇÃO EM CASO DE FALHA
})
                /* FUNÇÃO QUE RETORNA TODAS AS INFORMAÇÕES E CONFIGURAÇÕES DE USUÁRIO */
app.post("/getData", async (req, res) => {
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

                            /* ROTA QUE ATUALIZA AS INFORMAÇÕES E CONFIGURAÇÕES DO USUÁRIO NO BANCO DE DADOS */
app.put("/updateData", async(req, res)=>{
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
})










app.listen(PORT); //servidor rodando na porta 8182