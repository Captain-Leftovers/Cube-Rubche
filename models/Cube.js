const uniqid = require('uniqid');

class Cube {
  static #cubesList = [
    {
      name: "photo cube",
      description: " good photo of a cube",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfTOsK3KOfszlni0bk7r781Hl-PrbEimGKA&usqp=CAU",
      difficulty: "6",
      id: '1sd122f122dd',
    },
    {
    name: "simple cube",
    description: "just another simple cube :)",
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQChxO2Se7TnxPexFRwNCb9EDB-3JjzfceLRw&usqp=CAU',
    difficulty: "2",
    id: 'g1g1g1y819euj',

  },
  
  ];
  constructor(name, description, imageUrl, difficulty) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.difficulty = difficulty;
    this.id = uniqid();
  }
  static get cubes(){
    return Cube.#cubesList.slice();
  }

  static addCube(cube) {
    Cube.#cubesList.push(cube);

  } 

}

module.exports = Cube;
