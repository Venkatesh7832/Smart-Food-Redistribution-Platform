const mongoose=require("mongoose");

const claimSchema=new mongoose.Schema({

    donation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"FoodDonation",
        required:true
    },

    ngo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    quantityClaimed:{
        type:Number,
        required:true
    },

    status:{
        type:String,
        enum:[
            "claimed",
            "picked-up",
            "in-transit",
            "delivered"
        ],
        default:"claimed"
    }

},{
    timestamps:true
});

module.exports=mongoose.model("Claim",claimSchema);