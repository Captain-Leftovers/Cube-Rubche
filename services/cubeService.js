const Cube = require('../models/Cube');
const create = (name, description, imageUrl, difficulty) => {
 let cube = new Cube(name, description, imageUrl, difficulty)
 Cube.addCube(cube);
}

const getAll = ()=>{
    return Cube.getAll();}
const cubeService = {
    create,
    getAll

}
module.exports = cubeService;