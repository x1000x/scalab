const mongoose = require("mongoose");

//connection function

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true,
        });
        console.log("estamos conectados con exito");
    }
    catch(err){
        console.log("error en la conexion");
        process.exit(1);
    }
};

module.exports = connectDB;