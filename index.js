import express from 'express'
import dotenv from 'dotenv'
import routerAuth from './src/auth/routes/auth.routes.js'
import cors from 'cors'
import eventoRouter from './src/eventos/routes/evento.routes.js'
import participanteRouter from './src/participantes/routes/participante.routes.js'


dotenv.config()

const app = express()

const PORT = process.env.PORT

const opcionesCors = {
    origin: process.env.FRONTEND_URL_DEV,
    credentials: true
}


app.use(cors(opcionesCors))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/upload", express.static("src/middlewares/upload"))


app.use("/", routerAuth)
app.use("/", eventoRouter)
app.use("/", participanteRouter)



app.get('/', (req,res) => {
    res.json("Index")
})


app.listen( PORT,() => {
    console.log(`Server runing in http://localhost:${PORT}`)
})


