const Cube = require("../models/Cube");
const create = (name, description, imageUrl, difficulty) => {
  let cube = new Cube({
    name,
    description,
    imageUrl,
    difficulty,
  });
  return cube.save();
};

const getAll = () => {
  return Cube.find({});
};

const search = (search, from, to) => {
  let result = Cube.cubes.slice();
  if (search) {
    result = result.filter((el) =>
      el.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (from) {
    result = result.filter((el) => Number(el.difficulty) >= Number(from));
  }
  if (to) {
    result = result.filter((el) => Number(el.difficulty) <= Number(to));
  }
  return result;
};
const getOne = (id) => {
  return Cube.findById(id);
};
const cubeService = {
  create,
  getAll,
  getOne,
  search,
};
module.exports = cubeService;
