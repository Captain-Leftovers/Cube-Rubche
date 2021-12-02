const Cube = require("../models/Cube");
const Accessory = require("../models/Accessory");
const create = (name, description, imageUrl, difficulty) => {
  // let cube = new Cube({
  //   name,
  //   description,
  //   imageUrl,
  //   difficulty,
  // });
  return Cube.create({name, description,imageUrl, difficulty})
  // return cube.save();
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
const getOne = (id) => {
  let result =  Cube.findById(id).populate('accessories').lean();
  return result
};

const attachAccessory = async(cubeId, accessoryId) =>{
  let cube = await Cube.findById(cubeId);
  let accessory = await Accessory.findById(accessoryId);
  cube.accessories.push(accessory);
  return cube.save()
}
const cubeService = {
  create,
  getAll,
  getOne,
  search,
  attachAccessory
};
module.exports = cubeService;
