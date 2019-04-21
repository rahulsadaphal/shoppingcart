var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              =  require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    flash                 = require("connect-flash"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    seedDB                = require("./seeds"),
    Product               = require("./models/product");
    //methodOverride        =        require("method-override");

require("regex");
require('dotenv').load();
var middleware = require("./index");

//var productRoutes    = require("./routes/products");

//mongoose.connect("mongodb://localhost/auth_demo_app", { useNewUrlParser: true });

// assign mongoose promise library and connect to database
//mongoose.Promise = global.Promise;

//const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost/yelp_camp';
//const databaseUri = 'mongodb://rnsadaphal:rnsadaphal@cluster0-yyxxd.mongodb.net/test?retryWrites=true';

// 
mongoose.connect("mongodb+srv://rnsadaphal:rnsadaphal@cluster0-yyxxd.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(flash());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/public"));
//app.use(methodOverride('_method'));
app.use(require("express-session")({
    secret : "Rusty is the best and cutest dog in th world",
    resave : false,
    saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error= req.flash("error");
    res.locals.success= req.flash("success");
    next();
});

//==================================================================
//ROUTES
//==================================================================
//seedDB();
app.get("/", (req, res) => {
    Product.find({}, (err, allProducts) => {
        if(err){
            console.log("Error loading data");
        }else{
             res.render("./home", {products: allProducts});
        }
    });
   
});


function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};




 //Auth Routes

app.get("/register", function(req, res){
    res.render("register");
});

app.post("/register", function(req, res){
    User.register(new User({username : req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log("error:",err)
            return res.render("register");
        }
     passport.authenticate("local")(req, res, function(){
         req.flash("success", "Welcome to Shopping Cart" + user.username);
         res.redirect("/");
     });
        
     });
 });

app.get("/products", middleware.isLoggedIn, function(req, res) {
    if (req.query.search) {
      const regex = new RegExp(escapeRegex(req.query.search), 'gi');
      Product.find({ "name": regex }, function(err, foundProducts) {
          if(err || !foundProducts ) {
              console.log(err);
              req.flash("error", "Enter correct product name");
              return res.redirect("/");
              
          } else {
              
              res.render("./home", { products: foundProducts });
          }
      }); 
    }
})

app.get("/sort", middleware.isLoggedIn, function(req, res) {
   Product.find({}, null, {sort: {'rating': -1}}, function(err, foundProducts) {
    if(err){
        res.send(err);
        res.redirect("/");
    }else{
        res.render("./home", { products: foundProducts });
    }
   
}); 
              
            
})


app.get("/products/:id", middleware.isLoggedIn, (req, res) => {
    //res.send("This will be the show page for single campground");
    
    Product.findById(req.params.id).exec( ( err, foundProduct) => {
        if(err || !foundProduct){
            req.flash("error", "Product not found");
            res.redirect("back");
            console.log(err);
        }else{
           console.log(foundProduct);
        //   if (!foundCampground) {
        //         return res.status(400).send("Item not found.")
        //     }
           res.render("./show", {product: foundProduct}); 
        }
    });
    
});
//Login routes
app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect : "/",
    failureRedirect : "/login"
}) ,function(req, res){
    res.send("login");
});


app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/")
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


//app.use("/", productRoutes);

app.listen(process.env.PORT || 3000, process.env.IP, function(err){
    if(err){
        console.log("error", err)
    }
    console.log("Server started......");
    
});