const express = require('express');
const cubeService = require('../services/cubeService');
const router = express.Router();
let cubes = cubeService.getAll();
router.get("/", (req, res) => {
    res.render('home', /* {layout: "test"} */{
      cubes
    })
  });

  module.exports = router;