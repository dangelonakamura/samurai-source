const getAnime = require("./src/scraping/getAnime");
const getEpisodios = require("./src/scraping/getEpisodios");
const getAnimeTypes = require("./src/scraping/getAnimeTypes");
const getListByType = require("./src/scraping/getListByType");
const searchAnime = require("./src/scraping/searchAnime");

const express = require("express");
const app = express();


app.get("/anime/:source", async  (req, res ) => {
    const animeSource = req.params.source.replace(/ /g, '-');
    const animeInfo = await getAnime(animeSource);

    if(animeInfo[0]){
        return res.json(animeInfo);
    }

    return res.status(404).send();
});


app.get("/type/:source", async (req,res) => {
    const typeSource = req.params.source.replace(/ /g, '-');
    const findType = await getListByType(typeSource);
    
    if(findType[0]){
        return res.json(findType);
    }

    return res.status(404).send();
});

app.get("/search/:source", async (req,res) => {
    const animeSource = req.params.source.replace(/ /g, '+');
    const findAnime = await searchAnime(animeSource);
    
    if(findAnime[0]){
        return res.json(findAnime);
    }

    return res.status(404).send();
});

app.get("/types", async  (req, res ) => {
    const animesTypes = await getAnimeTypes();
    return res.json(animesTypes);
});

app.get("/episodios", async  (req, res ) => {
    const episodios = await getEpisodios();
    return res.json(episodios);
});


app.listen(3333, () => console.log("Running in port 3333"))

