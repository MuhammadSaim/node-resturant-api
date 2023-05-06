const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");

class TableModel extends Model {}

TableModel.init(
  {
    TableNo: DataTypes.STRING,
    Description: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Table",
    tableName: "TableMaster",
    timestamps: false,
  }
);

TableModel.removeAttribute("id");
TableModel.sync();

module.exports = TableModel;
