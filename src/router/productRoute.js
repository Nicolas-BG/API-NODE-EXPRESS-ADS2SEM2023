import express from 'express'

const router = express.Router()

router.get('/',(req, res)=>{
    const products = [
        {id:1, name: "PC da nasa"},
        {id:2, name: "Mouse"},
        {id:3, name: "Mesa digitalizadora"},
    ]
    res.json(products)
})

router.post('/',(req, res)=>{    
    //Create    
    const dados = req.body

    res.json({
        message: "Produto criado com sucesso",
        dados: dados
    })


})

router.put('/',(req, res)=>{    
    //Update
    const dados = req.body
    res.json({
        message: "Produto atualizado com sucesso",
        dados: dados
    })
})

router.delete('/',(req, res)=>{    
    res.json({message: "Produto deletado com sucesso... seu monstro"})
})

export default router