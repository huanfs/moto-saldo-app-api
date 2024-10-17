import Sequelize from "sequelize";

export const sequelize = new Sequelize("motosaldoapp","root","shavershian", {
    host:"localhost",
    dialect:"mysql",
});

// sequelize.authenticate()
// .then(()=>{console.log("autenticado com sucesso")})
// .catch((err)=>{console.log("erro ao conectar ao banco de dados mysql " + err)})