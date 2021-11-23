import * as express from "express";
import {getEnNameByChampionId, getKrNameByChampionId} from "../util/ riot_ChampionIdToName"
const axios = require('axios');

export const getSummoner= async (req: express.Request, res:express.Response, next:express.NextFunction)=> {
    const summonerName = req.params.summonerName

    const summoner = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.RIOT_API_KEY}`)

    return res.send(
        {
            summoner: summoner.data
        }
    )
}

export const getSummonerRank = async (req: express.Request, res:express.Response, next:express.NextFunction)=> {
    const summonerId = req.params.summonerId

    const summoner = await axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${process.env.RIOT_API_KEY}`)

    return res.send(
        {
            summoner: summoner.data
        }
    )
}

export const getMatchList = async (req: express.Request, res:express.Response, next:express.NextFunction)=> {
    const puuId = req.params.puuId || undefined
    const count = req.query.count || 10

    const matchList = await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuId}/ids?start=0&count=${count}&api_key=${process.env.RIOT_API_KEY}`)

    return res.send(
        {
            matchList : matchList.data
        }
    )
}

export const getMatch = async (req: express.Request, res:express.Response, next:express.NextFunction)=> {
    const matchId = req.params.matchId || undefined

    const match = await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${process.env.RIOT_API_KEY}`)
    // todo 해당 match 데이터에서 필요한 정보만을 골라서 사용해야 함
    // 예를 들면 참여자 목록, 참여자의 성과 정보, 딜량그래프 등

    return res.send(
        {
            match : match.data
        }
    )
}

export const getLeagueInfo = async (req: express.Request, res:express.Response, next:express.NextFunction)=> {
    const encryptedSummonerId = req.params.encryptedSummonerId || undefined

    const LeagueInfo = await axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${process.env.RIOT_API_KEY}`)

    return res.send(
        {
            LeagueInfo : LeagueInfo.data
        }
    )
}

export const getRotationList = async (req: express.Request, res:express.Response, next:express.NextFunction)=> {

    const rotations = await axios.get(`https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${process.env.RIOT_API_KEY}`)

    let championNames: any = []

    for (const id of rotations.data.freeChampionIds) {
        const En_name = getEnNameByChampionId(id)
        const Kr_name = getKrNameByChampionId(id)
        championNames.push({En_name,Kr_name})
    }

    return res.send(
        {
            rotations : championNames
        }
    )
}