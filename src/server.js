import express from 'express'
import {PORT} from './config.js'

const app = express()


app.get('/', (req, res)=>{
    res.json({message: "Bem-vindo a API"})
})

app.listen(PORT, () => {
    console.log(`Servido rodando na porta ${PORT}`)
})