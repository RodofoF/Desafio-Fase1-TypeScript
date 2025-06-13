import express, {Request, Response } from "express"

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from server on TypeScript!')
})

app.listen(3000, () => {
    console.log("The server is running on http://127.0.0.1:3000")
    
})