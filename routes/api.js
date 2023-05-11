const express = require("express");
const router = express.Router();
const {
  listTables,
  tableStatus,
} = require("../controllers/TableController.js");
const { listItems } = require("../controllers/ItemController.js");
const { listLocations } = require("../controllers/LocationController.js");
const { listEmployes } = require("../controllers/EmployeeController.js");
const { login } = require("../controllers/AuthController.js");
const auth = require("../middlewares/auth");

// auth routes
router.post("/auth/login", login);

// routes for tables
router.get("/tables", auth, listTables);
router.post("/table/status/:table_id", auth, tableStatus);

// routes for items
router.get("/items", auth, listItems);

// routes for locations
router.get("/locations", auth, listLocations);

// routes for employes
router.get("/employes", auth, listEmployes);

module.exports = router;
