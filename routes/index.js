const router = require("express").Router();
const profileRoutes = require("./api/Profile");
const autoRoutes = require("./api/Auto");

//  routes
router.use("/", autoRoutes);
router.use("/", profileRoutes);

module.exports = router;