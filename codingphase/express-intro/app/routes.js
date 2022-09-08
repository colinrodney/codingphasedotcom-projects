// import required librares/ frameworks
const express = require("express");
router = express.Router(); // create instance of express.Router name 'router'


router.get("/", (req, res) =>{
    // res.send("Hello World")
    // res.send(`<h1>Welcome to Express!</h1>`)
    res.render(`../assets/views/homepage.pug`)
})

// Passing in variables on a route
router.get("/testing", (req, res) =>{
    res.render("../assets/views/testing.pug",{
        username: `crodney`,
        fname: `colin`,
        lname: `rodney`,
        loggedIn: true,
        userbank: ["alpha", "bravo", "charlie"],
    })
})



// expose router
module.exports = router
