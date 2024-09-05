const getEpisodios = require("./getEpisodios");
const { animeTypes } = require("../config/config");

module.exports = async function getListByType(type){
    const data = await getEpisodios(animeTypes+type);
    return data;
}