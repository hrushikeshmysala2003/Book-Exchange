

const errorMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Inter server error"

    res.status(err.statusCode).json({
        success: false,
        message: err.stack
    })
}

module.exports = errorMiddleware;

