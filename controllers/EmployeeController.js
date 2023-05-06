const EmployeeModel = require("../models/EmployeeModel");

const listEmployes = async (req, res) => {
  const employes = await EmployeeModel.findAll({
    raw: true,
  });
  return res.json({
    employes: employes,
  });
};

module.exports = {
  listEmployes,
};
