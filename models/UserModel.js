const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");

class UserModel extends Model {}

UserModel.init(
  {
    USERCODE: DataTypes.STRING,
    USERPW: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "UserModel",
    tableName: "userpw",
    timestamps: false,
  }
);

UserModel.removeAttribute("id");
UserModel.sync();

module.exports = UserModel;
