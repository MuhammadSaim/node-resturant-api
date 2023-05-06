const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");

class LocationModel extends Model {}

LocationModel.init(
  {
    WH: DataTypes.INTEGER,
    WHNAME: DataTypes.STRING,
    SHORT: DataTypes.STRING,
    CHK: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "LocationModel",
    tableName: "whouse",
    timestamps: false,
  }
);

LocationModel.removeAttribute("id");
LocationModel.sync();

module.exports = LocationModel;
