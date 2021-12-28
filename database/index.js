const mongoose = require("mongoose");

//conexion function 
const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.DATABASE,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true,            

        });
        console.log("Base de datos conectada");
    } catch(err){
        console.log("Error en la base de datos", err);
        process.exit(1);
    }
};

module.exports = connectDB;
