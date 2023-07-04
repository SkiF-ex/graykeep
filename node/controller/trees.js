const Perks = require('../models/graykeep');

exports.getAllTrees = async (req, res) => {
    try {
        const data = await Perks.distinct('tree');
        const trees = ['All', ...data];

        res.json(trees);
    } catch (error) {

        res.status(500).json({ error: 'Server Error' });
    }
};