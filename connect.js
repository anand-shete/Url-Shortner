const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/urlShortner';

mongoose.connect(url).then(()=>console.log("Db connected")).catch((e)=>console.log("Db error"))
