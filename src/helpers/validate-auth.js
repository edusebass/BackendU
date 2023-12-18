//verifica si existe un inicio de sesion
module.exports.isAuthenticated = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/user/login')
}

//verifica ya incio lo manda a portafolios

module.exports.redirectIfAuthenticated = (req, res, next)=>{
    if (req.isAuthenticated()) {
        return res.redirect('/portafolios');
    }
        return next();
}

