const express = require("express");
const cubeService = require("../services/cubeService");
const router = express.Router();

const getCreate = (req, res) => {
  res.render("create" /* {layout: "test"} */);
};

const cubeDetails = (req, res)=>{
  let cube = cubeService.getOne(req.params.cubeId);
  res.render('details', {...cube})
  // console.log(cube);
  // res.end();
}

const createCube = (req, res) => {
  let {name, description, imageUrl, difficulty} = req.body;
  cubeService.create(name, description, imageUrl, difficulty);
  res.redirect("/");
};
router.get("/create", getCreate);
router.post("/create", createCube);
router.get('/:cubeId', cubeDetails)

module.exports = router;
