const { Model, DataTypes } = require("sequelize");
const Sequelize = require("sequelize");
const database = require("../config/database");

// const User = database.define("user", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// });

// class User extends Model {
//   static init(sequelize) {
//     super.init(
//       {
//         name: DataTypes.STRING,
//         email: DataTypes.STRING,
//         password: DataTypes.STRING,
//       },
//       {
//         sequelize,
//       }
//     );
//   }
// }

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User;
