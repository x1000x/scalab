const mongoose = require("mongoose");
const couponSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            unique: true,
            uppercase: true,
            required: "name is required",
            minlength:[6, "too short"],
            maxlength: [32, "too long"]
        },
        expiry:{
            tipe: Date,
            required: true
        }, 
        discount:{
            type: Number,
            required: true
        },
        status:{
            type: String,
            default: "Active",
            enum:["Active", "Inactive"]
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model("Coupon", couponSchema);