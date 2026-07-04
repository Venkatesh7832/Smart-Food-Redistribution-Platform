const User = require("../models/User");
const FoodDonation = require("../models/FoodDonation");
const Claim = require("../models/Claim");

const getDashboardStats = async (req, res) => {
  try {
    const users = await User.countDocuments();

    const ngos = await User.countDocuments({
      role: "ngo",
    });

    const donations = await FoodDonation.countDocuments();

    const meals = await FoodDonation.aggregate([
      {
        $group: {
          _id: null,
          total: {
            $sum: "$totalQuantity",
          },
        },
      },
    ]);

    const deliveries = await Claim.countDocuments({
      status: "delivered",
    });

    res.json({
      success: true,

      stats: {
        mealsSaved: meals[0]?.total || 0,

        users,

        ngos,

        deliveries,

        donations,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};