const { Sequelize } = require("sequelize");

const dbInfo = require("../config/database");

const connection = new Sequelize(dbInfo);

//"postgres://Arthur:1234@localhost:5432/nex_arthurathayde"

// try {
//   await sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

module.exports = connection;
