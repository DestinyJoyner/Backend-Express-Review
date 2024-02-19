const express = require("express")

const videogames = express.Router()

const {checkName} = require("../middleware/nameValidation.js")

// http://localhost:3001/videogame/
videogames.get("/", (req,res) => {
    res.status(200).json({message:"Videogame Home Page"})
})


videogames.get("/:videogameID", (req, res) => {
    const videogameID = req.params.videogameID

    // console.log(Number(videogameID))
    if(Number(videogameID)){
        res.status(200).json({message: videogameID})
    }
    else {
        res.status(404).json({
            error : "id must be numeric value"
        })
    }  
})


videogames.post("/", checkName, (req, res) => {
    const body = req.body
    // console.log(body)
    res.status(200).json({message: body })
})









module.exports = videogames


// http://localhost:3001/videogame/8
/* req = {
    body: {

    },
    params : {
        videogameID: "destiny"
    },
    query : {
        name : "code"
    }

} */

