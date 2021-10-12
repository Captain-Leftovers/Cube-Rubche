const Cube = require("../models/Cube");
const create = (name, description, imageUrl, difficulty) => {

  let cube = new Cube(name, description, imageUrl, difficulty);
  Cube.addCube(cube);
};

const getAll = () => {
  return Cube.cubes;
};

const getOne = (id) => {
  return Cube.cubes.filter((el) => el.id == id)[0];
};
const cubeService = {
  create,
  getAll,
  getOne,
};
module.exports = cubeService;
