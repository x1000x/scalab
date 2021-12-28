const express = require ("express");

const router = express.Router();

//routes
router.get ("/user",(req,res,next) => {
    res.json({
        data: "hey you hot user Api endpoint",
    });
});

//optime
//router.get("/user",middlewares1, middlewares2, etc)

module.exports = router;