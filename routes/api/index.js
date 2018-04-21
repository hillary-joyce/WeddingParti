const router = require("express").Router();
const weddingRoutes = require("./wedding");

// Book routes
router.use("/weddings", weddingRoutes);

module.exports = router;
