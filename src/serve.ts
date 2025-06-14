import express, {Request, Response } from "express"
import sequelize from "./conn/db"
import cors from "cors"
import livrosRoutes from './routes/livros'
import Livro from './models/Livro'
import Editora from './models/Editora'

const app = express();
app.use(cors());
app.use(express.json())

app.get('/ping', (req: Request, res: Response) => {
    res.json(
        {
            ping: 'OK'
        })
})

app.use('/livros', livrosRoutes)

sequelize.sync().then(() => {
    console.log('DB has been started!');
    app.listen(3000, () => {
        console.log("The server is running on http://127.0.0.1:3000") 
    })
}).catch(err => {
    console.error("There is an error to start the DB", err);
    
})