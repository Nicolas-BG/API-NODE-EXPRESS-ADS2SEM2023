import express from 'express'
import bodyParser from 'body-parser'

import userRoute from './router/userRoute.js'
import productRoute from './router/productRoute.js'
import logger from './midlewares/logger.js'


import {PORT} from './config.js'

const api = express()

api.use(logger)
api.use(bodyParser.json())

api.get('/', (req, res)=>{
    res.json({message: "Bem-vindo a API"})
})


//api.use('/user', logger, userRoute)
api.use('/user', userRoute)

api.use('/product', productRoute)

api.all('*', (req, res)=>{    
    res.status(404).json({message: "Rota não encontrada! SEU IDIOTA"})
})


api.listen(PORT, () => {
    console.log(`Servido rodando na porta ${PORT}`)
})

