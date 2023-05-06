const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");

class EmployeeModel extends Model {}

EmployeeModel.init(
  {
    ACCODE: DataTypes.INTEGER,
    ACNAME: DataTypes.STRING,
    JOBTITLE: DataTypes.STRING,
    EMAIl: DataTypes.STRING,
    TELNO: DataTypes.STRING,
    MOBILE: DataTypes.STRING,
    mUser: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "EmployeeModel",
    tableName: "stfmast",
    timestamps: false,
  }
);

EmployeeModel.removeAttribute("id");
EmployeeModel.sync();

module.exports = EmployeeModel;
