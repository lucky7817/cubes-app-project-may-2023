const uniqid = require('uniqid');

const cubes = [
    {
        id: '1c3a68d9f78d6638ec8fdad7',
        name: 'Rubik cube',
        description: 'A cool rubik cube',
        imageUrl: 'https://images.unsplash.com/photo-1615238168190-61adb4f070e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        difficultyLevel: 3,
    },

    {
        id: '2c3a68d9f78d6638ec8fdad7',
        name: 'Words cube',
        description: 'A cool words cube',
        imageUrl: 'https://images.unsplash.com/photo-1587093336587-eeca6cb17cf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
        difficultyLevel: 4,
    }
];

exports.getAll = (search, from, to) => {
    let result = cubes.slice();

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

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    };

    cubes.push(newCube);
    return newCube;
}