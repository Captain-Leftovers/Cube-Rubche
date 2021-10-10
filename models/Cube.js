class Cube {
    static #cubesList = [];
    constructor(name, description, imageUrl, difficulty){
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    }
    static getAll(){
        return this.#cubesList.slice();
    }

    static addCube(cube){
        this.#cubesList.push(cube)
    }
}

module.exports = Cube;