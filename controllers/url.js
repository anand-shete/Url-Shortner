const shortid = require('shortid');
const URL = require('../models/url')

GenerateNewShortUrl = async(req,res)=>{
    let body = req.body;
    if(!body.url) return res.render('err');
    const shortID = shortid();
    let anand= await URL.create({
        shortId:shortID,
        redirectURL : body.url,
        visitHistory:[],
        createdBy:req.user._id,
    })
    let redirectURL = anand.redirectURL;
    return res.render('home',{id:shortID, url:redirectURL})  //put id to backend
}
RedirectURL = async(req,res)=>{
    let shortId = req.params.shortId;
    let result = await URL.findOneAndUpdate(
        { shortId },
        {
            $push:{
                visitHistory:[{timestamp:new Date}]
            }
        })
    return res.redirect(result.redirectURL); 
}
GetAnalytics = async(req,res)=>{
    let shortId = req.params.shortId;
    let result = await URL.findOne({shortId});
    return res.json({
    TotalClicks : result.visitHistory.length,
    analytics : result.visitHistory,
    }) 
}
module.exports = {GenerateNewShortUrl,RedirectURL,GetAnalytics}