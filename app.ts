import * as express from "express";
const app = express();
const port = 3000;

app.get('/get', (req: express.Request, res: express.Response) => {
    res.send('Hello world');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})