/// require the FoodDonation model import
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../services/api";
import Sidebar from "../../components/dashboard/Sidebar";
import LocationPicker from "../../components/maps/LocationPicker";

const EditDonation = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        foodName: "",
        description: "",
        totalQuantity: "",
        pickupAddress: "",
        expiryTime: "",
        latitude: null,
        longitude: null,
    });


    useEffect(() => {
        const fetchDonation = async () => {
            try {
                const res = await api.get(`/donations/${id}`);

                setFormData({
                    foodName: res.data.donation.foodName,
                    description: res.data.donation.description,
                    totalQuantity: res.data.donation.totalQuantity,
                    pickupAddress: res.data.donation.pickupAddress,
                    expiryTime: res.data.donation.expiryTime.slice(0,16),
                    latitude: res.data.donation.pickupLocation?.latitude ?? null,
                    longitude: res.data.donation.pickupLocation?.longitude ?? null,
                });

            } catch (err) {

                toast.error("Unable to load donation");

            } finally {

                setLoading(false);

            }
        };

        fetchDonation();

    }, [id]);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.put(`/donations/${id}`, formData);

            toast.success("Donation updated");

            navigate("/donations");

        } catch (err) {

            toast.error(err.response?.data?.message || "Update failed");

        }
    }

    if (loading) return <div>Loading...</div>;

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-bold mb-6">Edit Donation</h1>
                <form onSubmit={handleSubmit} className="max-w-2xl">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Food Name</label>
                        <input
                            type="text"
                            value={formData.foodName}
                            onChange={(e) => setFormData({ ...formData, foodName: e.target.value })}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Total Quantity</label>
                        <input
                            type="number"
                            value={formData.totalQuantity}
                            onChange={(e) => setFormData({ ...formData, totalQuantity: e.target.value })}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Pickup Address</label>
                        <input
                            type="text"
                            value={formData.pickupAddress}
                            onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Expiry Time</label>
                        <input
                            type="datetime-local"
                            value={formData.expiryTime}
                            onChange={(e) => setFormData({ ...formData, expiryTime: e.target.value })}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Pickup Location</label>
                        <LocationPicker
                            initialPosition={
                                formData.latitude && formData.longitude
                                    ? {
                                        lat: formData.latitude,
                                        lng: formData.longitude,
                                    }
                                    : null
                            }
                            onLocationSelect={(location) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    latitude: location.lat,
                                    longitude: location.lng,
                                }))
                            }
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Update Donation
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditDonation;