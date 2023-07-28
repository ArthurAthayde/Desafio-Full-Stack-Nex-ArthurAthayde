const { Model, DataTypes } = require("sequelize");
const User = require("./User");

class Product extends Model {
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
        description: {
          type: DataTypes.STRING(250),
        },
      },
      {
        sequelize,
        timestamps: false,
      }
    );
  }
}

module.exports = Product;
