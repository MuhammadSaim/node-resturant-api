const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");

class ItemModel extends Model {}

ItemModel.init(
  {
    mID: DataTypes.INTEGER,
    itmcode: DataTypes.STRING,
    Subcode: DataTypes.STRING,
    mcode: DataTypes.STRING,
    ItmName: DataTypes.STRING,
    itemdesc: DataTypes.STRING,
    Unit: DataTypes.STRING,
    Price: DataTypes.FLOAT,
    Rate: DataTypes.FLOAT,
    minPrice: DataTypes.FLOAT,
  },
  {
    sequelize,
    modelName: "ItemModel",
    tableName: "itemast",
    timestamps: false,
  }
);

ItemModel.removeAttribute("id");
ItemModel.sync();

module.exports = ItemModel;
