const express = require("express")

const videogames = express.Router()

const {checkName} = require("../middleware/nameValidation.js")

const {getAllVideogames} = require("../query/videogame.js")

// http://localhost:3001/videogame/
videogames.get("/", async (req,res) => {
    const allVideogames = await getAllVideogames()
    res.status(200).json(allVideogames)
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



videogames.put("/:videogameID", checkName,  (req,res) => {
    const videogameID = req.params.videogameID

    const body = req.body

    res.status(200).json({
        body: body, 
        videogameID: videogameID})
    
        // res.status(200).json({body, videogameID})

    // res.status(200).json({
    //     value: "Hi",
    //     order: "hamburger"
    // })

})


videogames.delete("/:videogameID", (req, res) => {
    const videogameID = req.params.videogameID

    if(Number(videogameID)){
        res.status(200).json({message: ` delete ${videogameID}`})
    }
    else {
        res.status(404).json({
            error : "videogame id must be numeric value"
        })
    }  
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

