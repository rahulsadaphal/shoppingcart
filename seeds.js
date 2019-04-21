var mongoose = require("mongoose");
var Product = require("./models/product");

 
var data = [
       {
        "id": 1,
        "name":"AIR ZOOM PEGASUS 35 SS 19 Running Shoes For Men  (Black)",
        "orginalPrice": 10995,
        "discountPercentage": 40,
        "rating": 3.5,
        "image":"https://s3.ap-south-1.amazonaws.com/rupeek.co/hearth/942851-013-7-nike-black-metpew-original-imafd2r2gd7mn9vg.jpeg"
    },
    {
        "id": 2,
        "name":"KYRIE FLYTRAP SS 19 Basketball Shoes For Men  (Grey, Green)",
        "orginalPrice": 6495,
        "discountPercentage": 60,
        "rating": 2.5,
        "image":"https://s3.ap-south-1.amazonaws.com/rupeek.co/hearth/ao4438-003-9-nike-wolf-grey-black-dark-grey-white-original-imafdgm2bhqcywfm.jpeg"
    },
    {
        "id": 3,
        "name":"REVOLUTI SS 19 Running Shoes For Men  (Blue)",
        "orginalPrice": 3695,
        "discountPercentage": 19,
        "rating": 4,
        "image":"https://s3.ap-south-1.amazonaws.com/rupeek.co/hearth/908988-403-8-nike-indigo-force-white-blue-void-original-imafdgmf6sv3khjv.jpeg"
    },
    {
        "id": 4,
        "name":"PHANTOM VENOM SS 19 Football Shoes For Men  (Red)",
        "orginalPrice": 4995,
        "discountPercentage": 15,
        "rating": 3.5,
        "image":"https://s3.ap-south-1.amazonaws.com/rupeek.co/hearth/ao0579-600-10-nike-bright-crimson-black-bright-crimson-original-imafdgv5bvmxgvgq.jpeg"
    },
    {
        "id": 5,
        "name":"PHANTOM VENOM SS 19 Football Shoes For Men  (Red)",
        "orginalPrice": 4995,
        "discountPercentage": 5,
        "rating": 5,
        "image":"https://s3.ap-south-1.amazonaws.com/rupeek.co/hearth/ao0578-600-10-nike-bright-crimson-black-bright-crimson-original-imafdgv5acwcz8cf.jpeg"
    },
    {
        "id": 6,
        "name":"VAPOR 12 CLUB SS 19 Football Shoes For Men  (Grey)",
        "orginalPrice": 4995,
        "discountPercentage": null,
        "rating": 4,
        "image":"https://s3.ap-south-1.amazonaws.com/rupeek.co/hearth/ah7378-070-10-nike-dark-grey-black-opti-yellow-original-imafdgmfqcyreeqf.jpeg"
    },
    {
        "id": 7,
        "name":"SB CHECK SS 19 Sneakers For Men  (Black)",
        "orginalPrice": 4795,
        "discountPercentage": 10,
        "rating": 3.5,
        "image":"https://s3.ap-south-1.amazonaws.com/rupeek.co/hearth/843896-009-10-nike-black-black-gum-light-brown-original-imafdgmfvnzjb2ye.jpeg"
    },
    {
        "id": 8,
        "name":"AIR MAX SS 19 Tennis Shoes For Men  (Black)",
        "orginalPrice": 7995,
        "discountPercentage": 17,
        "rating": 3,
        "image":"https://s3.ap-south-1.amazonaws.com/rupeek.co/hearth/ao7351-006-8-nike-black-phantom-phantom-bright-crimson-original-imafdkf6bfrehnzx.jpeg"
    },
    {
        "id": 9,
        "name":"PHANTOM VSN C SS 19 Football Shoes For Men  (Red)",
        "orginalPrice": 5995,
        "discountPercentage": 20,
        "rating": 4.5,
        "image":"https://s3.ap-south-1.amazonaws.com/rupeek.co/hearth/ao3273-600-7-nike-bright-crimson-metallic-silver-original-imafdgm2shxubfcz.jpeg"
    }
]
 
function seedDB(){
    data.forEach(function(seed){
                Product.create(seed, function(err, product){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a product");
                        //create a comment
                      
                    }
                });
            });
    
     
    //add a few comments
}
 
 
 
module.exports = seedDB;