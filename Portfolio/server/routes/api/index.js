const router = require("express").Router();
const projectRoutes = require("./projects");

// Book routes

router.use("/projects", projectRoutes);

module.exports = router;
