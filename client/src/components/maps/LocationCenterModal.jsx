import { useState } from "react";
import DonationMap from "./DonationMap";
import RouteMap from "./RouteMap";
import {
    calculateDistance,
    estimateDrivingTime,
    formatDistance,
} from "../../utils/distanceUtils";


export default function LocationCenterModal({
    open,
    donation,
    onClose,
}) {
    const [activeTab, setActiveTab] = useState("location");

    if (!open || !donation) return null;

    const hasLocation =
        donation?.pickupLocation?.latitude != null &&
        donation?.pickupLocation?.longitude != null;

    const donor = hasLocation
        ? {
              lat: donation.pickupLocation.latitude,
              lng: donation.pickupLocation.longitude,
          }
        : null;

    // Temporary NGO location
    // We'll replace this later with the logged-in NGO's location.
    const ngo = {
        lat: 17.412,
        lng: 78.448,
    };

    const distance =
        hasLocation
            ? calculateDistance(donor, ngo)
            : 0;

    const eta =
        estimateDrivingTime(distance);

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-11/12 max-w-5xl rounded-xl bg-white shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b p-5">
                    <div>
                        <h2 className="text-2xl font-bold">
                            {donation.foodName}
                        </h2>

                        <p className="text-gray-500">
                            Pickup Location & Navigation
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                    >
                        Close
                    </button>
                </div>
                {/* Tabs */}
                <div className="flex border-b">
                    <button
                        onClick={() => setActiveTab("location")}
                        className={`flex-1 py-3 font-semibold ${
                            activeTab === "location"
                                ? "border-b-4 border-green-600 text-green-600"
                                : ""
                        }`}
                    >
                        📍 Location
                    </button>

                    <button
                        onClick={() => setActiveTab("route")}
                        className={`flex-1 py-3 font-semibold ${
                            activeTab === "route"
                                ? "border-b-4 border-indigo-600 text-indigo-600"
                                : ""
                        }`}
                    >
                        🚗 Route
                    </button>
                </div>
                {/* Content */}
                <div className="p-5">
                    {activeTab === "location" && (
                        <>
                            <DonationMap donation={donation} />
                                <div className="mt-5 rounded-xl bg-indigo-50 p-5 shadow">
                                    <h3 className="text-xl font-bold mb-4">
                                        Route Information
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-gray-500">
                                                Distance
                                            </p>
                                            <p className="text-2xl font-bold text-green-700">
                                                {formatDistance(distance)} km
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">
                                                Estimated Time
                                            </p>
                                            <p className="text-2xl font-bold text-blue-700">
                                                {eta} mins
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">
                                                Average Speed
                                            </p>
                                            <p className="font-semibold">
                                                40 km/h
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">
                                                Route
                                            </p>
                                            <p className="font-semibold">
                                                Donor → NGO
                                            </p>
                                        </div>
                                        <a
                                            href={`https://www.google.com/maps/dir/${donor.lat},${donor.lng}/${ngo.lat},${ngo.lng}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 inline-block rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"
                                        >
                                            🧭 Open in Google Maps
                                        </a>                    
                                    </div>
                                    <p className="text-gray-600 mt-4">
                                        Note: The distance and ETA are approximate
                                        values based on the current location of the donor and the NGO. 
                                        Actual values may vary based on traffic and route conditions.
                                    </p>
                                </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}