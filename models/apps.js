import Sequelize from "sequelize";

import { sequelize } from "../db.js";

export const Apps = sequelize.define("apps",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    apps: {
        type: Sequelize.STRING,
    },
    timestamps: false
    
});

// Apps.sync()
// .then(()=>{console.log("sincronizado a tabela apps do banco motosaldoapp")})
// .catch((err)=>{console.log("erro ao sincronizar com a tabela apps " + err)})
