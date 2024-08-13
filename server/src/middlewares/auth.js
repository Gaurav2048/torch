const { REQUEST_TOKEN_LOCATION, JWT_SIGN_KEY } = require('../utils/constants')
const httpStatus = require('http-status')


const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    jwt.verify(req.header[REQUEST_TOKEN_LOCATION], JWT_SIGN_KEY, function(err, payload) {
        if (err) {
            res.status(httpStatus.UNAUTHORIZED).send("Unauthorised")
        }
        res.user = payload
        next()
    })
}

module.exports = auth;
