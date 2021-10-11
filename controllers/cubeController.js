const express = require("express");
const cubeService = require("../services/cubeService");
const router = express.Router();

const getCreate = (req, res) => {
  let allCubes = cubeService.getAll();
  res.render("create" /* {layout: "test"} */);
};

const createCube = (req, res) => {
  let {name, description, imageUrl, difficulty} = req.body;
  cubeService.create(name, description, imageUrl, difficulty);
  res.redirect("/cube/create");
};
router.get("/create", getCreate);
router.post("/create", createCube);

module.exports = router;
