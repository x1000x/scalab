const mongoose = require("mongoose");
const {ObjetId} = mongoose.Schema;

const userSchema = new mongoose.Schema(
    {
        name: String,
        mail: {
            type: String,
            required: true,
            index: true,
        },
        role:{
            type: String,
            default: "subscriber",            
        },
        cart:{
            type: Array,
            default: [],
        },
        address: String,
        wishlist:[{
            type: ObjetId,
            ref: "Product"
        }]
    },
        {timestamps:true}

);

module.exports = mongoose.model("User",userSchema);