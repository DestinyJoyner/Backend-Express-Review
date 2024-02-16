const express = require("express")

const videogames = express.Router()

// http://localhost:3001/videogame/
videogames.get("/", (req,res) => {
    res.status(200).json({message:"Videogame Home Page"})
})


module.exports = videogames