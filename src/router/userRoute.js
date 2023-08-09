import express from 'express'

const router = express.Router()

router.get('/',(req, res)=>{
    const users = [
        {id:1, name: "João"},
        {id:2, name: "Carlos"},
        {id:3, name: "Alexandria"},
    ]
    res.json(users)
})

router.post('/',(req, res)=>{    
    //Create
    const dados = req.body

    res.json({
        message: "Usuário criado com sucesso",
        dados: dados
    })

    })

router.put('/',(req, res)=>{    
    //Update
    res.json({message: "Usuário atualizado com sucesso"})
})

router.delete('/',(req, res)=>{    
    res.json({message: "Usuário deletado com sucesso... seu monstro"})
})

export default router