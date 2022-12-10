const mongoose=require("mongoose")

const DecSchema= new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:[true, "Dec Name must required"]
    },
    email:{
        type:String,
        unique:true,
        required:[true, "Dec Email must required"]
    },
    phone:{
        type:Number,
        unique:true,
        required:[true, "Dec Phone must required"]
    },
    state:{
        type:String,
        required:[true, "Dec State must required"]
    },
    pincode:{
        type:Number,
        required:[true, "Dec Pincode must required"]
    },
    aadhar:{
        type:Number,
        unique:true,
        required:[true, "Dec Aadhar must required"]
    }
})

const Dec=new mongoose.model("Dec",DecSchema)
module.exports=Dec