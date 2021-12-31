const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const orderSchema = new mongoose.Schema(
    {
        products:[
            {
                product:{
                    type: ObjectId,
                    ref: "Product",
                },
                count:Number,
                color:String 
            }
        ],

        paymentIntent:{ },

        orderStatus:{
            tyoe:String,
            default: "Not Processed",
            enum:["Not Processed", "Cash on Delivery", "Processing", "Dispatched", "Cancelled", "Completed" ]
        },

        orderBy: {
            type: ObjectId,
            ref: "User"
        },
    },
    { timestamp:true }
)

module.exports = mongoose.model("Order", orderSchema);