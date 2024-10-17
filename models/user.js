import Sequelize from "sequelize";

import { sequelize } from "../db.js";

export const User = sequelize.define("users",{
    id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name: {
        type: Sequelize.CHAR(6),
    },
    password: {
        type: Sequelize.CHAR(8),
    },
});

// User.sync()
// .then(()=>{console.log("conectado a tabela user no banco de dados motosaldoapp")})
// .catch((err)=>{console.log("erro ao conectar a tabela user " + err)})