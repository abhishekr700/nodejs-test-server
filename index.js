const express = require("express")

const app = express()

app.use("/", (req, res) => {
    res.send(req.url)
})

app.listen(80, () => {
    console.log("Server Running");
})