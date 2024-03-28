const { Schema, model } = require("mongoose")

const AccountSchema=new Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    username:{
        type:String,
       require:true,
       unique:true,
       indexed:true,
    },
    email:{
        type:String,
       require:true,
       unique:true,
       indexed:true,
    },
    number:{
       type:String,
       require:true,
       unique:true,
       indexed:true,
    },
    birthDate:{
        type:Date,
        reqired:true,
    },
    origin:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    refreshToken:{
        type:[]
    },
    type:{
        type:String,
        required:true,
        enum: ["admin", "user"]
    },
    state: {
        type: String,
        required: true,
        enum: ["active", "suspended", "deactivated"],    // active..everything can be accessed, suspended..only login buhh can't ..deactivated..can't login 
        default: "active",
        
    }
},{timestamps: true}
)
const   AccountModel = model("Account", AccountSchema)
module.exports = AccountModel;