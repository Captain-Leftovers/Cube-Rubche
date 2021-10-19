const Accessory = require("../models/Accessory");

function create(name, description, imageUrl) {
  return Accessory.create({ name, description, imageUrl });
}

function getAll() {
  return Accessory.find({}).lean();
}

function getAllWithout(accessoryIds) {
  return Accessory.find({ _id: { $nin: accessoryIds } }).lean();
}

accessoryService = {
  create,
  getAll,
  getAllWithout,
};

module.exports = accessoryService;
