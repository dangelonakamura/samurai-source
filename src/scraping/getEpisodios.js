const cheerio = require("cheerio");
const { episodio } = require("../config/config");

module.exports = async function getEpisodios(url=episodio) {
    const html = await (await fetch(url)).text();
    const $ = cheerio.load(html);

    return $('.poster').map((i, elem) => ({
        url: $(elem).find('img').attr('src'),
        name: $(elem).siblings('.data, .eptitle').find('h3 a').text().trim()
    })).get();
};