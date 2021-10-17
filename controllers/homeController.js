const express = require("express");
const cubeService = require("../services/cubeService");
const router = express.Router();

const searchFn = async (req, res) => {
  let { search, from, to } = req.query;
  let cubes = await cubeService.search(search, from, to);

  res.render("home", { cubes, search, from, to, title: 'SEARCH'});
};
router.get("/search", searchFn);
router.get("/", async (req, res) => {
  let cubes =await cubeService.getAll();
  res.render(
    "home",
    /* {layout: "test"} */ {
      cubes,
    }
  );
});

module.exports = router;
