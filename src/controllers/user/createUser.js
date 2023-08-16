import user from '../../models/userModel.js'

const createUser = async (req, res) => {
    
    try{
        const user = req.body
        const res = await user.create(user)
        const [result] = res
        if(result.affectedRows === 1){
            res.status(201).json({message: 'User Created',
        user:{
            id: result.insertId
        }})
        }

    }catch(err){
        console.error(err)
        res.status(500).json({message: 'Server error'})
    }

}

export default createUser