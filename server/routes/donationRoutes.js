const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const validateDonation = require("../validators/donationValidator");

const {
    createDonation,
    getAllDonations,
    getDonationById,
    claimDonation,
    updateDonation,
    deleteDonation
} = require("../controllers/donationController");

router.post("/", protect, validateDonation, createDonation);
router.get("/", protect, getAllDonations);
router.get("/:id", protect, getDonationById);
router.put(
    "/:id/claim", protect, authorizeRoles("ngo"), claimDonation
);

router.put(
    "/:id", protect, validateDonation, updateDonation
);

router.delete(
    "/:id", protect, deleteDonation
);



module.exports = router;