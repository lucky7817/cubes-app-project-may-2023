const Cube = require('../models/Cube');

exports.getAll = async (search, from, to) => {
    let result = await Cube.find().lean();
// TODO: use mongoose to filter in the db
    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(cube =>cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }
    return result;
}

// First method:
exports.getOne = (cubeId) => Cube.findById(cubeId);
//Second method:
exports.getOneWithAccessories = (cubeId) => this.getOne(cubeId).populate('accessories');

// Here we use - new ..... to create
exports.create = (cubeData) => {
    const cube = new Cube(cubeData);
    
    return cube.save();
};

exports.attachAccessory = async (cubeId, accessoryId) => {

    // First method:
    //return Cube.findByIdAndUpdate(cubeId, {$push: {accessories: accessoryId}});

    // Second method:
    const cube = await Cube.findById(cubeId);
    cube.accessories.push(accessoryId);

    return cube.save();

}