const express = require("express")
const app = express()
const cors = require("cors")

const videogameController = require("./controllers/videogamesController.js")

app.use(express.json())
app.use(cors())
app.use("/videogame", videogameController)


// http://localhost:3001
app.get("/", (req, res) => {
    res.status(200).send("<h1>Test Backend Server</h1>")
})

// app.get("/videogame", (req, res) => {
//     res.status(200).json({message:"Videogame Home Page"})
// })


app.get("*", (req, res) => {
    res.status(404).json({
        Error: "Page Not Found"
    })
})


module.exports = app

