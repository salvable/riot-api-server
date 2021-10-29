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

export const getMatchList = async (req: express.Request, res:express.Response, next:express.NextFunction)=> {
    const puuId = req.params.puuId
    const count = req.query.count || 10

    const matchList = await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuId}/ids?start=0&count=${count}&api_key=${process.env.RIOT_API_KEY}`)

    return res.send(
        {
            matchList : matchList.data
        }
    )
}