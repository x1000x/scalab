// const mongoose = require ("mongoose");

// const categorySchema = new mongoose.Schema({

//     name:{
//         type: String,
//         trim: true,
//         required: "Name ein required",
//         minlength: [2, "too short"],
//         maxlength: [32, "too long"],
//     },
    
//     slug:{
//         type: String,
//         unique: true,
//         lowercase:true,
//         index: true
//     },

//     status:{
//       type: String,
//       default: "Active",
//       enum: ["Active","Inactive"],
//     }, 
// },
// {timestamps:true}
// );

// module.exports = mongoose.model("Category", "categorySchema");

const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required",
      minlength: [2, "Too short"],
      maxlength: [32, "Too long"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    status: {
      type: String,
      default: "Active",
      enum: ["Active", "Inactive"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);