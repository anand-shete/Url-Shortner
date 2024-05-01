require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser')
// const {express} = require('express');     // express namak function import kro
const urlRoute = require('./routes/url');   //POORE urlRoute ko import karo
const userRoute = require('./routes/user')
const staticRoute = require('./routes/staticRouter');
const PORT = process.env.PORT || 8000;
const url = process.env.MONGO_URL;
mongoose.connect(url).then(()=>console.log("MongoDB connected")).catch((e)=>console.log("Db error:",e))

const bodyParser = require("body-parser")
const {CheckForAuth,restrictTo}= require('./middlewares/auth')

const app = express();

app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))   //middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(CheckForAuth);

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))    //Set views directory

app.use('/url', restrictTo(['normal','admin']), urlRoute); //inLine Middlewares
app.use('/', staticRoute);
app.use('/user', userRoute)

app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`))