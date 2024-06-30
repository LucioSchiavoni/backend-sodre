import express from 'express'
import dotenv from 'dotenv'
import routerAuth from './src/auth/routes/auth.routes.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT
app.use(express.json());

app.use("/", routerAuth)



export default app.get('/', (req,res) => {
    res.json("Index")
})


app.listen( PORT,() => {
    console.log(`Server runing in http://localhost:${PORT}`)
})


