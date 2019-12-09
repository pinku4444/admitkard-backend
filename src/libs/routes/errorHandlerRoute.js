
const errorHandlerRoute   = (err,req,res,next) => {
    if(!err.code) {
        err.code = 500;
    }
    const errorResponse = {
        status : false,
        code : err.code,
        errors : err.msg
    }
    return res.status(err.code).json(errorResponse);

}

export default errorHandlerRoute;
