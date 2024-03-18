const express = require('express');     //This is '/url' route
const router = express.Router();

const { GenerateNewShortUrl,RedirectURL,GetAnalytics } = require('../controllers/url')

router.post('/', GenerateNewShortUrl)

router.get('/:shortId',RedirectURL)  
router.get('/analytics/:shortId',GetAnalytics);

module.exports = router;