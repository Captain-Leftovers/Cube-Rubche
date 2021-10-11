const uniqid = require('uniqid');

class Cube {
  static #cubesList = [
    {
      name: "photo cube",
      description: " good photo of a cube",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfTOsK3KOfszlni0bk7r781Hl-PrbEimGKA&usqp=CAU",
      difficulty: "6",
    },
  ];
  constructor(name, description, imageUrl, difficulty) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.difficulty = difficulty;
    this.id = uniqid();
  }
  static getAll() {
    return this.#cubesList.slice();
  }

  static addCube(cube) {
    this.#cubesList.push(cube);
  }
}

module.exports = Cube;
