const router = require("express").Router();
const weddingRoutes = require("./wedding.js");

// Book routes
router.use("/weddings", weddingRoutes);

module.exports = router;
