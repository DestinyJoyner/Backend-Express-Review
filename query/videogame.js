const db = require("../db/dbConfig.js")

const getAllVideogames = async () => {
    try {
        const allVideogames = await db.any('SELECT * FROM videogames')

        return allVideogames

    } catch (error) {
        return error
    }
}


module.exports = {
    getAllVideogames
}