const db = require("../db/dbConfig.js")

const getAllVideogames = async () => {
    try {
        const allVideogames = await db.any('SELECT * FROM videogames') 
        
        return allVideogames

    } catch (error) {
        return error
    }
}

// Get One
const getOneVideogame = async (idValue) => {
    try {
        // db.one(arg1, arg2)
        const oneVideogame = await db.one('SELECT * FROM videogames WHERE id=$1', idValue)

        return oneVideogame
        
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllVideogames,
    getOneVideogame
}