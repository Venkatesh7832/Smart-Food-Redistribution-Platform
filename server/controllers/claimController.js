// createClaim.js
const Claim = require("../models/Claim");
const FoodDonation = require("../models/FoodDonation");

// createClaim.js
const createClaim = async (req, res) => {

    try {

        const { donationId, quantityClaimed } = req.body;

        const donation = await FoodDonation.findById(donationId);

        if (!donation) {

            return res.status(404).json({
                success:false,
                message:"Donation not found"
            });

        }

        if(quantityClaimed <=0){

            return res.status(400).json({
                success:false,
                message:"Quantity must be greater than zero"
            });

        }

        if(quantityClaimed > donation.remainingQuantity){

            return res.status(400).json({

                success:false,

                requested:quantityClaimed,

                available:donation.remainingQuantity,

                message:`Only ${donation.remainingQuantity} meals are available.`

            });

        }

        const claim = await Claim.create({

            donation:donation._id,

            ngo:req.user.id,

            quantityClaimed

        });

        donation.remainingQuantity -= quantityClaimed;

        if(donation.remainingQuantity===0){

            donation.status="fully-claimed";

        }else{

            donation.status="partially-claimed";

        }

        await donation.save();

        res.status(201).json({

            success:true,

            message:"Claim created successfully",

            claim,

            remainingQuantity:donation.remainingQuantity

        });

    } catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};

// updateClaimStatus.js
const updateClaimStatus = async (req, res) => {

    try {

        const claim = await Claim.findById(req.params.id);

        if (!claim) {
            return res.status(404).json({
                success: false,
                message: "Claim not found"
            });
        }

        if (claim.ngo.toString() !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized"
            });
        }

        const allowedStatuses = [
            "claimed",
            "picked-up",
            "in-transit",
            "delivered"
        ];

        if (!allowedStatuses.includes(req.body.status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid status"
            });
        }
        
        claim.status = req.body.status;

        await claim.save();

        res.status(200).json({
            success: true,
            message: "Claim status updated successfully",
            claim
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports={

    createClaim,
    updateClaimStatus

};
