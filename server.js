const express = require ("express");
const connectDB =require("./database");
const cors = require("cors");
const morgan = require ("morgan");
const {readdirSync} = require("fs"); 
//const bodyParser = require("body-parser");
const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
//const userRoutes = require("./routes/user");

require("dotenv").config();

//app-server
const app = express();

//db-conection
connectDB();

// middlewares-server
app.use(morgan("dev"));
app.use(express.json({limit:"2mb"}));
app.use(express.urlencoded({extended: false}));
app.use(cors());

//routes middlewares-fs option 1
 //app.use("/api", userRoutes);

//routes middlewares-fs (optime) 
 readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

//port
const port = process.env.PORT || 8000;

//LISTEN
app.listen(port, ()=> console.log(`el servidor esta corriendo en el puerto ${port}`));