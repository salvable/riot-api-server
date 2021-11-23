import * as express from "express";
import * as dotenv from "dotenv";
import * as cors from "cors";
import {sequelize} from "./models";
import {errorMiddleware} from './middleware/error.middleware';

const RiotApi = require("./riot_api/riot_api")
const UserController = require("./controller/user.controller")

dotenv.config();

const PORT:number = 3000;
const HOST:string = process.env.DB_HOST || 'localhost';
const app = express();

// middle
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);

app.post('/user', UserController.addUser)
app.get('/summoner/:summonerName', RiotApi.getSummoner)
app.get('/rank/:summonerId', RiotApi.getSummonerRank)
app.get('/match/:matchId', RiotApi.getMatch)
app.get('/matches/:puuId', RiotApi.getMatchList)
app.get('/league/:encryptedSummonerId', RiotApi.getLeagueInfo)
app.get('/rotations', RiotApi.getRotationList)


const driver = async () =>{
    try{
        await sequelize.sync({force:true});
    } catch (err) {
        console.log(err)
        console.log("init Fail");
        return;
    }
}

driver();

app.listen(PORT,HOST,async () => {console.log(`Server Listening on ${HOST}:${PORT}`);})