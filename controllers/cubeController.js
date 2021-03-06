const express = require("express");
const cubeService = require("../services/cubeService");
const cubeAccessoryController = require("../controllers/cubeAccessoryController");
const router = express.Router();

const getCreate = (req, res) => {
  res.render("create" /* {layout: "test"} */);
};

const cubeDetails = async (req, res)=>{
  let cube = await cubeService.getOne(req.params.cubeId);
  console.log(cube);
  res.render('details', {...cube})
  // console.log(cube);
  // res.end();
}

const createCube = async (req, res) => {
  let {name, description, imageUrl, difficulty} = req.body;
  try{
  await cubeService.create(name, description, imageUrl, difficulty);
  res.redirect("/");
  } 
  catch(error){
    res.status(400).send(error.message)
    res.end();
  }
};
router.get("/create", getCreate);
router.post("/create", createCube);
router.get('/:cubeId', cubeDetails);
router.use('/:cubeId/accessory', cubeAccessoryController)

module.exports = router;
