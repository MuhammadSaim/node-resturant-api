const TableModel = require("../models/TableModel");

const listTables = async (req, res) => {
  const tables = await TableModel.findAll({
    raw: true,
  });
  return res.json({
    tables: tables,
  });
};

module.exports = {
  listTables,
};
