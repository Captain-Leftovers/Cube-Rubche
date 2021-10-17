const express = require("express");
const homeController = require("../controllers/homeController");
const cubeController = require("../controllers/cubeController");
const aboutController = require("../controllers/aboutController");
const accessoryController = require('../controllers/accessoryController');
const router = express.Router();

router.use(homeController);
router.use("/cube", cubeController);
router.use("/accessory", accessoryController);
router.use(aboutController);
router.all("*", (req, res) => {
  res.render("404");
});
module.exports = router;
