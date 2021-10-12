const express = require('express');
const cubeService = require('../services/cubeService');
const router = express.Router();
router.get("/", (req, res) => {
let cubes = cubeService.getAll();
    res.render('home', /* {layout: "test"} */{
      cubes
    })
  });

  module.exports = router;