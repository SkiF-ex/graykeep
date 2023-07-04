const Perks = require('../models/graykeep');

exports.getAllPerks = async (req, res) => {
    const tree = req.query.tree;
    const pool = req.query.pool;

    const query = {};

    switch (pool) {
        case 'All':
            break;
        case 'Ulearned':
            query.status = false;
            break;
        case 'Learned':
            query.status = true;
            break;
        default:
            break;
    }

    if (tree && tree !== 'All') {
        query.tree = tree;
    }

    try {
        const result = await Perks.find(query);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};