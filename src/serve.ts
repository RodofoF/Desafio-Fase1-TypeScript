import express, {Request, Response } from "express"

const app = express()

app.get('/ping', (req: Request, res: Response) => {
    res.json(
        {
            ping: 'OK'
        })
})

app.listen(3000, () => {
    console.log("The server is running on http://127.0.0.1:3000")
    
})