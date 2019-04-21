const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var ProductSchema = new mongoose.Schema({
    id : String,
    name : String,
    originalPrice : String,
    discountPercentage : String,
    rating : String,
    image : String
});


ProductSchema.plugin(mongoose_fuzzy_searching, {fields: ['name']});
ProductSchema.plugin(passportLocalMongoose);
const Events = mongoose.model('Events', ProductSchema);
//Events.fuzzySearch('Nodejs meetup').then(console.log).catch(console.error);
module.exports = mongoose.model("Product", ProductSchema);