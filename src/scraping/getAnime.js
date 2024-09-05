const cheerio = require("cheerio");
const { anime } = require("../config/config");

module.exports = async function getAnime(animeSource) {
    const html = await (await fetch(anime+animeSource)).text();
    const $ = cheerio.load(html);

    return $('.episodios li').map((i, elem) => ({
        image: $(elem).find('img').attr('src'),
        episodio: $(elem).text().trim()
    })).get();

};