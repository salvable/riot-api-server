import * as express from "express";
import * as dotenv from "dotenv";
import * as cors from "cors";
import {sequelize} from "./models";

dotenv.config();

const PORT:number = 3000;
const HOST:string = process.env.DB_HOST || 'localhost';
const app = express();

// middle
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/get', (req: express.Request, res: express.Response) => {
    res.send('Hello world');
})

app.listen(PORT,HOST,async () => {
    console.log(`Server Listening on ${HOST}:${PORT}`);

    // //sequelize-db 연결 테스트
    await sequelize.authenticate()
        .then(async () => {
            console.log("connection success");
        })
        .catch((e) => {
            console.log(sequelize);
        })
})