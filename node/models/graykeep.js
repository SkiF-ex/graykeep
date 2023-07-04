const mongoose = require('mongoose');

const GrayScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    tree: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    points: {
        red: {
            type: Number,
            default: 0,
        },
        green: {
            type: Number,
            default: 0,
        },
        blue: {
            type: Number,
            default: 0,
        },
    },
    status: {
        type: Boolean,
        required: true,
    },
});

const Perks = mongoose.model('perks', GrayScheme);

module.exports = Perks;