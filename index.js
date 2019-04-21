var Product = require("./models/product");

var middlewareObj={};


middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Please login for more functionality");
    res.redirect("/login");
}
module.exports = middlewareObj;
