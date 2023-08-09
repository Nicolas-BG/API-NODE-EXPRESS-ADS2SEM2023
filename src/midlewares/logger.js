export const logger = (req, res, next) => {
    console.log(`${req.method} - ${req.originalUrl}`)
    //console.log(req.baseUrl)
    //console.log(req.originalUrl)
    //console.log(req.ip)
    //console.log(req.method)
    next()
}

export default logger