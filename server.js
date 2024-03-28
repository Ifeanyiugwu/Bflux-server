const { connect, default: mongoose } = require("mongoose");
const Accountmodel = require("./src/models/Account");
const app = require("./src/app");
const { config } = require("./src/config");
const router = require("./src/routes");
const { notFounds, errorHandler } = require("./src/middlewares/error.middleware");
app.use("/api/v1", router)

app.all("*", notFounds)
app.use(errorHandler)
app.listen(config.PORT, async()=>{
try{
        //connect to database
        console.log("connecting to database...");              //CONNECTING TO DATABASE
        console.log("235286653739983:2i2s8OlGpG7h66-ixSx0wvEBC_w@dz1da2ebw")
        // CLOUDINARY_URL=cloudinary("235286653739983:2i2s8OlGpG7h66-ixSx0wvEBC_w@dz1da2ebw");
        
        // mongoose.set("StrictQuery", true);
        connect(config.DB_URL)      // connection strings
        console.log("database connected successfully...");
        

        console.log(`server is running on local host:${config.PORT}`);              // SHOWING OUR SERVER IS RUNNING
    }catch(error){
        console.error(error);
        process.exit(-1);
    }
    })