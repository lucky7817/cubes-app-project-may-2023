const Accessory = require('../models/Accessory');

exports.getAll = () => Accessory.find();

// Here we use create method to create
exports.create = (accessoryData) => Accessory.create(accessoryData)