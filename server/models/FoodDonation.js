const mongoose = require("mongoose");

const foodDonationSchema = new mongoose.Schema({

    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    foodName:{
        type:String,
        required:true
    },

    description:{
        type:String
    },

    category:{
        type:String,
        default:"Other"
    },

    totalQuantity:{
        type:Number,
        required:true,
        min:1
    },

    remainingQuantity:{
        type:Number,
        required:true,
        min:0
    },

    unit:{
        type:String,
        default:"Meals"
    },

    expiryTime:{
        type:Date,
        required:true
    },

    pickupAddress:{
        type:String,
        required:true
    },

    status:{
        type:String,
        enum:[
            "available",
            "partially-claimed",
            "fully-claimed",
            "expired"
        ],
        default:"available"
    }

},{
    timestamps:true
});

module.exports=mongoose.model(
    "FoodDonation",
    foodDonationSchema
);