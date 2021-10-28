import * as express from "express";
const axios = require('axios');

export const SummonerInfo = async (req: express.Request, res:express.Response, next:express.NextFunction)=> {
    const summonerName = req.params.summonerName

    const summoner = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.RIOT_API_KEY}`)

    return res.send(
        {
            summoner: summoner.data
        }
    )
}
