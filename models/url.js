const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        unique: true,
        required: true
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [{timestamp: { type: Number }}],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    }
},
    { timestamp: true }
)
const URL = new mongoose.model('url',urlSchema);

module.exports = URL;