import jwt from 'jsonwebtoken'
// for every request will check token is present or not 
// if present check valid or not
// if valid allow to do next function (sending response to request , sending logic)
// next is call back function means controllers (all files )
const auth = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1]

        let decodeData = jwt.verify(token, process.env.JWT_MESSAGE)
        req.userId = decodeData?.id
    //    pass to next function
        next();
    }
    catch(error){
        console.log(error)
    }
}

export default auth;