const validateDonation = (req, res, next) => {

    const {
        foodName,
        totalQuantity,
        pickupAddress,
        expiryTime
    } = req.body;

    if (!foodName || foodName.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Food name is required"
        });
    }

    if (!totalQuantity || totalQuantity <= 0) {
        return res.status(400).json({
            success: false,
            message: "Quantity must be greater than zero"
        });
    }

    if (!pickupAddress || pickupAddress.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Pickup address is required"
        });
    }

    if (!expiryTime) {
        return res.status(400).json({
            success: false,
            message: "Expiry time is required"
        });
    }

    next();
};

module.exports = validateDonation;