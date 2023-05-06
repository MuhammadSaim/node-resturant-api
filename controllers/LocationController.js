const LocationModel = require("../models/LocationModel");

const listLocations = async (req, res) => {
  const locations = await LocationModel.findAll({
    raw: true,
  });
  return res.json({
    locations: locations,
  });
};

module.exports = {
  listLocations,
};
