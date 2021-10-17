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

const getAll =() => Cube.find({}).lean();

const search = async (search, from, to) => {
  let result = await Cube.find({}).lean();
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
const getOne = async (id) => {
  let result = await Cube.findById(id).lean();
  return result
};
const cubeService = {
  create,
  getAll,
  getOne,
  search,
};
module.exports = cubeService;
