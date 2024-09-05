const cheerio = require("cheerio");
const { animeTypes } = require("../config/config");

module.exports = async function getAnimeTypes() {
    const html = await (await fetch(animeTypes)).text();
    const $ = cheerio.load(html);

    return $('p').map((i, elem) => $(elem).text().trim()).get();
};