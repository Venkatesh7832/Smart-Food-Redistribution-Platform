const express=require("express");

const router=express.Router();

const protect=require("../middleware/authMiddleware");

const authorizeRoles=require("../middleware/roleMiddleware");

const {

    createClaim,
    updateClaimStatus

}=require("../controllers/claimController");

router.post(
    "/",
    protect,
    authorizeRoles("ngo"),
    createClaim
);

router.put(
    "/:id/status", 
    protect,
    authorizeRoles("ngo"), 
    updateClaimStatus
);


module.exports=router;