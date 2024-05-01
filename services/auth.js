const jwt = require('jsonwebtoken');
const secret = 'Anand@123';         //Tokens can only be changed by guy that has secret key

setUser = (user)=>{
    return jwt.sign({           //sign(payload/data,secret key)
        _id:user.id,
        email:user.email,
        role:user.role,
    },secret)   
}
getUser = token =>{
    // if(!token) return null;
    try{
        return jwt.verify(token,secret)
    } catch(e) {
        return null;
    } 
}

module.exports = {
    setUser,getUser
}