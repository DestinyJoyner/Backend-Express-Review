const express = require("express")

const videogames = express.Router()

const {checkName} = require("../middleware/nameValidation.js")

const { getAllVideogames, getOneVideogame, updateVideogame, deleteVideogame, createVideogame} = require("../query/videogame.js")

// http://localhost:3001/videogame/
videogames.get("/", async (req,res) => {
    const allVideogames = await getAllVideogames()
    res.status(200).json(allVideogames)
})


videogames.get("/:videogameID", async (req, res) => {
    const videogameID = req.params.videogameID

    if(Number(videogameID)){
        // call get one function with param id value
        const oneVideogame = await getOneVideogame(videogameID)

        res.status(200).json(oneVideogame)
    }
    else {
        res.status(404).json({
            error : "id must be numeric value"
        })
    }  
})

// checkName
videogames.post("/",  async (req, res) => {
    const body = req.body
    // console.log(body)

    const newVideogame = await createVideogame(body)

    if(newVideogame.id){
        res.status(200).json(newVideogame)
    }
    else {
        res.status(500).json(newVideogame)
    }

})



// checkName, 

videogames.put("/:videogameID", async (req,res) => {
    const videogameID = req.params.videogameID

    const body = req.body

    const updatedVideogame = await updateVideogame(videogameID, body)

    if(updatedVideogame.id){
        res.status(200).json(updatedVideogame)
    }
    else {
        res.status(404).json(updatedVideogame)
    }
    
        // res.status(200).json({body, videogameID})

    // res.status(200).json({
    //     value: "Hi",
    //     order: "hamburger"
    // })

})


videogames.delete("/:videogameID", async(req, res) => {
    const videogameID = req.params.videogameID

    if(Number(videogameID)){
        const deletedVideogame = await deleteVideogame(videogameID)

        if(deletedVideogame.id){
            res.status(200).json(deletedVideogame)
        }
        else {
            res.status(500).json(deletedVideogame)
        }
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

