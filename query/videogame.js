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


const updateVideogame = async (idValue, valueObj) => {
    /* 
    {
    id 
    title 
    release_year 
    favorite 
    game_system 
    }
    */
    try {
        const updatedVideogame = await db.one('UPDATE videogames SET title=$1, release_year=$2, favorite=$3, game_system=$4 WHERE id=$5 RETURNING *', [
            valueObj.title,
            valueObj.release_year,
            valueObj.favorite,
            valueObj.game_system,
            idValue
        ])

        return updatedVideogame

        
    } catch (error) {
        return error
    }
}

const deleteVideogame = async (idValue) => {
    try {
        const deletedVideogame = await db.one('DELETE FROM videogames WHERE id=$1 RETURNING *', idValue)
        
        return deletedVideogame
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllVideogames,
    getOneVideogame,
    updateVideogame,
    deleteVideogame
}