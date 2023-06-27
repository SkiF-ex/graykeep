const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://skif:skiffundota2@graykeep.5kat1wb.mongodb.net/');

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

const Graykeep = mongoose.model('perks', GrayScheme);

module.exports = Graykeep;