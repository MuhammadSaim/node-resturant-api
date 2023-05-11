const TableModel = require("../models/TableModel");

const listTables = async (req, res) => {
  const tables = await TableModel.findAll({
    raw: true,
  });
  return res.json({
    tables: tables,
  });
};

const tableStatus = async (req, res) => {
  const table_id = req.params.table_id;
  const status = req.body.status;

  if (!table_id) {
    return res.status(400).json({
      error: true,
      message: "You have to specify the table",
    });
  }

  if (!status) {
    return res.status(400).json({
      error: true,
      message: "You have to specify the table status",
    });
  }

  const table = await TableModel.findOne({
    where: {
      TableNo: table_id,
    },
    exclude: ["id"],
    order: [["TableNo", "ASC"]],
    attributes: ["TableNo", "Description", "table_status"],
  });

  if (table === null) {
    return res.status(400).json({
      error: true,
      message: "Sorry not able to find the table.",
    });
  }

  await TableModel.update(
    {
      table_status: status,
    },
    {
      where: {
        TableNo: table_id,
      },
    }
  );

  return res.json({
    error: false,
    message: "Your table status is updated successfully.",
  });
};

module.exports = {
  listTables,
  tableStatus,
};
