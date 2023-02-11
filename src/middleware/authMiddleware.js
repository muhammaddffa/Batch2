const jwt = require ('jsonwebtoken');

module .exports = {
    checklogin : (req, res, next) =>{
        const bearer = req.header('access-token');
        if(bearer === false){
            res.send({
                msg: "Cannot Access",
                status: 401,
                error: "You Must Be Login "
            })
        }else{
            const token  = bearer.split ("")
        }
    }
}