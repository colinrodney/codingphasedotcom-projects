// import required librares/ frameworks
const express = require("express");
router = express.Router(); // create instance of express.Router name 'router'


router.get("/", (req, res) =>{
    // res.send("Hello World")
    res.send(`<h1>Welcome to Express!</h1>`)
})

router.get(`/about`, function(req, res){
    return(
        res.send(`<h1> About Page</h1>`)
        )
})

// Using parameters in routes
router.get("/user/:username/:state", (req, res) =>{
    let userInfo = req.params; // gets parameters stored in route
    let query = req.query; // gets query variables + values from URL string
    res.send(`<p>Hello ${userInfo.username}. You're from ${userInfo.state} right? You are ${query.age} and your occupation is ${query.occupation} and you drive a ${query.car}</p>`)

})

// expose router
module.exports = router
