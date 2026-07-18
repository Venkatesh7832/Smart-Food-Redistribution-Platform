import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import LocationPicker from "../../components/maps/LocationPicker";
import Sidebar from "../../components/dashboard/Sidebar";
import { createDonation } from "../../services/donationService";

function CreateDonation() {

    const navigate = useNavigate();

    const [loading,setLoading]=useState(false);

    const [form, setForm] = useState({
        foodName: "",
        totalQuantity: "",
        description: "",
        expiryTime: "",
        pickupAddress: "",
        latitude: null,
        longitude: null,
    });

    const handleChange=(e)=>{

        setForm({

            ...form,

            [e.target.name]:e.target.value

        });

    };

    const handleSubmit=async(e)=>{

        e.preventDefault();

        try{

            setLoading(true);

            await createDonation(form);

            toast.success("Donation Created");

            navigate("/donations");

        }catch(err){

            toast.error(err.response?.data?.message || "Error");

        }finally{

            setLoading(false);

        }

    };

    return(

        <div className="flex">

            <Sidebar/>
            
            <div className="flex-1 p-8 bg-slate-100">
                <form onSubmit={handleSubmit}
                    className="bg-white rounded-xl p-8 shadow max-w-xl" >

                    <h1 className="text-3xl font-bold mb-6">
                    Create Donation
                    </h1>
                    
                    <input
                    name="foodName"
                    placeholder="Food Name"
                    className="border p-3 rounded w-full mb-4"
                    onChange={handleChange}
                    />

                    <input
                    name="totalQuantity"
                    type="number"
                    placeholder="Meals"
                    className="border p-3 rounded w-full mb-4"
                    onChange={handleChange}
                    />

                    <textarea
                    name="description"
                    placeholder="Description"
                    className="border p-3 rounded w-full mb-4"
                    rows="4"
                    onChange={handleChange}
                    />

                    <input
                    type="datetime-local"
                    name="expiryTime"
                    className="border p-3 rounded w-full mb-4"
                    onChange={handleChange}
                    />

                    <input
                    name="pickupAddress"
                    placeholder="Pickup Address"
                    className="border p-3 rounded w-full mb-6"
                    onChange={handleChange}
                    />
                    
                    <div className="mb-6">
                        <label className="block font-semibold mb-2">
                            Select Pickup Location
                        </label>

                        <LocationPicker
                            onLocationSelect={(location) => {
                                setForm((prev) => ({
                                    ...prev,
                                    latitude: location.lat,
                                    longitude: location.lng,
                                }));
                            }}
                        />
                    </div>

                    <button
                        disabled={loading}
                        className="bg-green-600 text-white px-8 py-3 rounded"
                        >

                        {loading?"Creating...":"Create Donation"}
                    </button>

                </form>
            </div>
        </div>

        );

    }

export default CreateDonation;