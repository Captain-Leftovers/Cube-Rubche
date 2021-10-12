const Cube = require("../models/Cube");
const create = (name, description, imageUrl, difficulty) => {
  let cube = new Cube(name, description, imageUrl, difficulty);
  Cube.addCube(cube);
};

const getAll = () => {
  return Cube.cubes;
};

const search = (search, from, to)=>{
  let result = Cube.cubes.slice();
  if(search){
    result = result.filter(el => el.name.toLowerCase().includes(search.toLowerCase()));
  }
  if(from){
    result = result.filter(el=> Number(el.difficulty) >= Number(from))
  } 
  if(to){
    result = result.filter(el=>Number(el.difficulty) <= Number(to))
  }
  return result
}
const getOne = (id) => {
  return Cube.cubes.filter((el) => el.id == id)[0];
};
const cubeService = {
  create,
  getAll,
  getOne,
  search
};
module.exports = cubeService;
