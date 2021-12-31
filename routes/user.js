const { request } = require("express");
const express = require("express");

const router = express.Router();

//routes
router.get("/user", (req,res,next) =>{
    res.json({
        data:"hey you hit user api endpoint",
    });
});

//router.post("/product, authCheck", adminCheck, create); 

module.exports = router;