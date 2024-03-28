exports.notFounds = (_req, res, _next) =>{                      // middleware used to implement error..
    const err = new Error("Route NOt Found");
    err.status = 400;
    res.status(err.status).json({error: err.message})
};

exports.errorHandler = (err, _req, res, _next)=>{                      // error middleware itself.
    if(err.error){
        return res.status(err.status || 404).json({error: err.message})
    }
    res.status(err.status || 500).json({error: err.message || "unknown error occured"})
}