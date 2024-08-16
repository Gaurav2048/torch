const { INTERNAL_SERVER_ERROR } = require("http-status");

const errorHandler = (err, req, res, next) => {
    const { code, message } = err
    res.status(code || INTERNAL_SERVER_ERROR).send({ message })
}

module.exports = errorHandler;
