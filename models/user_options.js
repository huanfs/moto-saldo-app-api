import Sequelize from "sequelize";

import { sequelize } from "../db.js";

export const Data = sequelize.define("data",{
    id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    user_data: {
        type: Sequelize.JSON,
        allowNull: false,
    }
})

// User_options.sync()
// .then(()=>{console.log("sincronizado com a tabela user_options")})
// .catch((err)=>{console.log(err)})