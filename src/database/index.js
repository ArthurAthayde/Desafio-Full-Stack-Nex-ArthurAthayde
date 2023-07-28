const { Sequelize } = require("sequelize");

const dbInfo = require("../config/database");

const UserModel = require("../models/User");

const connection = new Sequelize(dbInfo);

UserModel.init(connection);

module.exports = connection;

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: "localhost",
//     dialect: "postgres",
//   }
// );

// sequelize.sync();

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Database connected");
//   } catch (err) {
//     console.error("Unable to connect to the database", err);
//   }
// })();

// module.exports = sequelize;
