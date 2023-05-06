const ItemModel = require("../models/ItemModel");

const listItems = async (req, res) => {
  const items = await ItemModel.findAll({
    raw: true,
  });
  return res.json({
    items: items,
  });
};

module.exports = {
  listItems,
};
