
const FoodDonation = require("../models/FoodDonation");

// Create Donation
const createDonation = async (req, res) => {
    try {

        const donation = await FoodDonation.create({

            ...req.body,

            createdBy: req.user.id,

            remainingQuantity: req.body.totalQuantity,

            pickupLocation: {
                latitude: req.body.latitude || null,
                longitude: req.body.longitude || null,
            }

        });

        res.status(201).json({
            success: true,
            message: "Donation created successfully",
            donation
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get all donations
const getAllDonations = async (req, res) => {
    try {

        const donations = await FoodDonation
            .find()
            .populate("createdBy", "name email phone")
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            count: donations.length,
            donations
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// get donation by Id
const getDonationById = async (req, res) => {
    try {

        const donation = await FoodDonation
            .findById(req.params.id)
            .populate("createdBy", "name email phone");

        if (!donation) {
            return res.status(404).json({
                success: false,
                message: "Donation not found"
            });
        }

        res.status(200).json({
            success: true,
            donation
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Claim Donation and  update Donation Status
const claimDonation = async (req, res) => {
    try {

        const donation = await FoodDonation.findById(req.params.id);

        if (!donation) {
            return res.status(404).json({
                success: false,
                message: "Donation not found"
            });
        }

        if (donation.status !== "available") {
            return res.status(400).json({
                success: false,
                message: "Donation has already been claimed"
            });
        }

        donation.status = "claimed";
        // donation.claimedBy = req.user.id; // This line is commented out because claimedBy is not defined in the schema

        await donation.save();

        const updatedDonation = await FoodDonation.findById(donation._id)
            .populate("createdBy", "name email")
            // .populate("claimedBy", "name email"); 
            // Now claimedBy is not defined in the schema, so this line is commented out

        res.status(200).json({
            success: true,
            message: "Donation claimed successfully",
            donation: updatedDonation
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// update Donation
const updateDonation = async (req, res) => {

    try {

        const donation = await FoodDonation.findById(req.params.id);

        if (!donation) {
            return res.status(404).json({
                success: false,
                message: "Donation not found"
            });
        }

        // Only creator can update
        if (donation.createdBy.toString() !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to update this donation"
            });
        }

        // Cannot edit if fully claimed
        if (donation.status === "fully-claimed") {
            return res.status(400).json({
                success: false,
                message: "Fully claimed donations cannot be updated"
            });
        }

        // Calculate already claimed quantity
        const claimedQuantity =
            donation.totalQuantity - donation.remainingQuantity;

        // Update total quantity safely
        if (req.body.totalQuantity !== undefined) {

            if (req.body.totalQuantity < claimedQuantity) {
                return res.status(400).json({
                    success: false,
                    message: `Quantity cannot be less than already claimed (${claimedQuantity})`
                });
            }

            donation.totalQuantity = req.body.totalQuantity;
            donation.remainingQuantity =
                req.body.totalQuantity - claimedQuantity;
        }

        donation.foodName =
            req.body.foodName || donation.foodName;

        donation.description =
            req.body.description || donation.description;

        donation.pickupAddress =
            req.body.pickupAddress || donation.pickupAddress;
        
        if (
            req.body.latitude !== undefined &&
            req.body.longitude !== undefined
        ) {
            donation.pickupLocation = {
                latitude: req.body.latitude,
                longitude: req.body.longitude,
            };
        }

        donation.expiryTime =
            req.body.expiryTime || donation.expiryTime;

        await donation.save();

        res.status(200).json({
            success: true,
            message: "Donation updated successfully",
            donation
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete Donation
const Claim = require("../models/Claim");

const deleteDonation = async (req, res) => {

    try {

        const donation = await FoodDonation.findById(req.params.id);

        if (!donation) {
            return res.status(404).json({
                success: false,
                message: "Donation not found"
            });
        }

        if (donation.createdBy.toString() !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to delete this donation"
            });
        }

        const activeClaims = await Claim.countDocuments({
            donation: donation._id
        });

        if (activeClaims > 0) {
            return res.status(400).json({
                success: false,
                message: "Donation has active claims and cannot be deleted"
            });
        }

        await donation.deleteOne();

        res.status(200).json({
            success: true,
            message: "Donation deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


module.exports = {
    createDonation,
    getAllDonations,
    getDonationById,
    claimDonation,
    updateDonation,
    deleteDonation
};
