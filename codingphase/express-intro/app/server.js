const express = require("express")
const routes = require("./routes.js")
const app = express()
const port = 3000;

app.use("/", routes)

app.listen(port, () =>
    console.log(`app listening on port ${port}!`)
)