const router = require("express").Router();
const profileRoutes = require("./api/Profile");

//  routes
router.use("/", profileRoutes);

module.exports = router;