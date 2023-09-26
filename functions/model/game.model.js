const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Game = new Schema({
    Name : { type: String, unique: true, required: true },
    Url: { type: String, required: true },
    Author: { type: String, required: true },
    "published Date": { type: Date, default: Date.now, required: true },
    
});

    module.exports = mongoose.model('GameData', Game, 'GameData');