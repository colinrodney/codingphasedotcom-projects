const express = require("express")
const routes = require("./routes.js")
const app = express()
const port = 3000;

// Routes
app.use("/", routes)
// Static files folder
app.use(express.static("public"))
// Template Engine
app.set(`view engine`, `pug`)

app.listen(port, () =>
    console.log(`app listening on port ${port}!`)
)