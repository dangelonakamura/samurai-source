const { search } = require("../config/config");
const getEpisodios = require("./getEpisodios");

module.exports = async function searchAnime(animeSource) {
    const data = await getEpisodios(search+animeSource);
    return data;
}