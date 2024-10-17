import Sequelize from "sequelize";

import { sequelize } from "../db.js";

export const Current = sequelize.define("current",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    app: {
        type: Sequelize.STRING,
    },
    ammount: {
        type: Sequelize.DECIMAL(6, 2),
    },
    expenses: {
        type: Sequelize.DECIMAL(6, 2),
    },
    liquid: {
        type: Sequelize.DECIMAL(10, 2),
    },
    timestamps: false
})

// Current.sync()
// .then(()=>{console.log("conectado a tabela current do banco motosaldoapp")})
// .catch((err)=>{console.log("erro ao conectar a tabela current " + err)})