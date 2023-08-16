const getUser = (req, res) => {
    const users = [
        {id:1, name: "João"},
        {id:2, name: "Carlos"},
        {id:3, name: "Alexandria"},
    ]
    res.json(users)
}

export default getUser