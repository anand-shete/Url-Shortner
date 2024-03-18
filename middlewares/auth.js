const {getUser} = require('../services/auth')

CheckForAuth=(req,res,next)=>{              //authorization
    const tokenCookie = req.cookies?.token;
    req.user = null;

    if(!tokenCookie) return next();

    const user = getUser(tokenCookie);  //Verfication of JWT token

    req.user = user;
    return next();

}
restrictTo=(roles =[])=>{           //authentication
    return (req,res,next)=>{
        if(!req.user) return res.redirect('/login');

        if(!roles.includes(req.user.role)) return res.end('UnAuthorized!')

        return next();
    }
}

module.exports = {CheckForAuth,restrictTo}