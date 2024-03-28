class APIError extends Error {

    constructor (msg, status){
        super(msg);
        this.status = status;
    }

    static badRequest(msg = "Invalid Request", status = 400){    // 
        return new this(msg, status);
    };
    static notFound = (msg = "No Records Found", status = 400) =>{
        return new this(msg, status);
    }

    static unauthenticated = (msg = "Please Login To Have Access", status = 401)  =>{
            return new this(msg,status)
    }
    static unauthorized = (msg = "Access Denied", status = 403)  =>{
            return new this(msg,status)
    }
}

module.exports ={
    APIError,
}