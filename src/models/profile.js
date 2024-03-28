const { Schema, model } = require("mongoose")

const ProfileSchema=new Schema({
    ImageId:{
        type: String,
        
},
    ImageUrl:{ 
        type:String,
    },
    FacebookUrl:{
        type:String,
    },
    Instagram: {
        type:String,
    },
    User:{
        type: Schema.Types.ObjectId,
        required:true,
        ref:"Account",
    },
},{timestamps: true}
)
const  ProfileModel = model("Profile", ProfileSchema)
module.exports = ProfileModel;

