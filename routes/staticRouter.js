const express = require('express');     //These are  '/' url routes
const URL = require('../models/url');
const { restrictTo } = require('../middlewares/auth');

const router = express.Router();

router.get('/admin/urls',restrictTo(['admin']),async(req,res)=>{
    const allurls = await URL.find({});
    res.render('home', { urls: allurls })
})
router.get('/', restrictTo(['admin','normal']),async (req, res) => {
    const allurls = await URL.find({createdBy:req.user._id});
    res.render('home', { urls: allurls })         //res.render('home',{urls:allurls,name:'Anand Shete'})   
})
router.get('/signup',(req,res)=>{
    return res.render('signup')
})
router.get('/login',(req,res)=>{
    return res.render('login')
})

module.exports = router;