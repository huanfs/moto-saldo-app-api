import Sequelize from "sequelize";

import { sequelize } from "../db.js";

export const Goals = sequelize.define("goals",{
    money: {
        type: Sequelize.INTEGER,
    },
    time: {
        type: Sequelize.INTEGER,
    },
    choice: {
        type: Sequelize.STRING,
    }
})

// Goals.sync()
// .then(()=>{console.log("conectado a tabela goals do banco motosaldoapp")})
// .catch((err)=>{console.log("erro ao conectar a tabela goals " + err)})