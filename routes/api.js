const express = require("express");
const router = express.Router();
const { listTables } = require("../controllers/TableController.js");
const { listItems } = require("../controllers/ItemController.js");
const { listLocations } = require("../controllers/LocationController.js");
const { listEmployes } = require("../controllers/EmployeeController.js");

// routes for tables
router.get("/tables", listTables);

// routes for items
router.get("/items", listItems);

// routes for locations
router.get("/locations", listLocations);

// routes for employes
router.get("/employes", listEmployes);

module.exports = router;
