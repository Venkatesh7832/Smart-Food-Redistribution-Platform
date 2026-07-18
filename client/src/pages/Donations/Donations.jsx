import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";

import Sidebar from "../../components/dashboard/Sidebar";
import DonationCard from "../../components/donations/DonationCard";
import SearchBar from "../../components/donations/SearchBar";
import FilterPanel from "../../components/donations/FilterPanel";
import ClaimModal from "../../components/donations/ClaimModal";
import { claimDonation } from "../../services/donationService";
import LocationCenterModal from "../../components/maps/LocationCenterModal";

import {
    getDonations,
    deleteDonation,
} from "../../services/donationService";

import {
    calculateDistance,
} from "../../utils/distanceUtils";

function Donations() {

    const [donations, setDonations] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");
    const [sort, setSort] = useState("nearest");
    const [selectedDonation, setSelectedDonation] = useState(null);
    const [showClaimModal, setShowClaimModal] = useState(false);
    const [claimLoading, setClaimLoading] = useState(false);
    const [showLocationCenter, setShowLocationCenter] = useState(false);

    // Temporary NGO/User location
    const currentLocation = {
        lat: 17.412,
        lng: 78.448,
    };
    
    useEffect(() => {
        loadDonations();
    }, []);

    const loadDonations = async () => {
        try {
            const res =
                await getDonations();
            setDonations(res.data.donations);
        } catch {
            toast.error(
                "Unable to fetch donations"
            );
        }

    };

    const handleLocation = (donation) => {
        setSelectedDonation(donation);
        setShowLocationCenter(true);
    };
    
    const handleDelete = async (id) => {
        try {
            await deleteDonation(id);
            toast.success(
                "Donation deleted"
            );
            loadDonations();
        } catch {
            toast.error(
                "Delete failed"
            );
        }
    };

    const handleClaimClick = (donation) => {
        setSelectedDonation(donation);
        setShowClaimModal(true);
    };

    const handleClaimConfirm = async (quantity) => {
        try {
            setClaimLoading(true);
            await claimDonation(
                selectedDonation._id,
                quantity
            );
            toast.success("Donation claimed successfully");
            setShowClaimModal(false);
            setSelectedDonation(null);
            await loadDonations();
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Unable to claim donation"
            );
        } finally {
            setClaimLoading(false);
        }
    };

    const filteredDonations = donations
        .map((donation) => {
            const pickup = donation.pickupLocation;
            if (
                pickup?.latitude == null ||
                pickup?.longitude == null
            ) {
                return {
                    ...donation,
                    distance: Number.MAX_VALUE,
                };
            }
            const distance = calculateDistance(
                currentLocation,
                {
                    lat: pickup.latitude,
                    lng: pickup.longitude,
                }
            );
            return {
                ...donation,
                distance,
            };
        })
        .filter((donation) => {
            const query = search.toLowerCase();
            return (
                donation.foodName?.toLowerCase().includes(query) ||
                donation.pickupAddress?.toLowerCase().includes(query) ||
                donation.donor?.name?.toLowerCase().includes(query)
            );
        })
        .filter((donation) =>
            category
                ? donation.category === category
                : true
        )
        .filter((donation) =>
            status
                ? donation.status === status
                : true
        )
        .sort((a, b) => {
            if (sort === "nearest")
                return a.distance - b.distance;
            if (sort === "newest")
                return new Date(b.createdAt) - new Date(a.createdAt);
            if (sort === "oldest")
                return new Date(a.createdAt) - new Date(b.createdAt);
            if (sort === "expiry")
                return new Date(a.expiryTime) - new Date(b.expiryTime);

            return 0;
        });

    return (
        <div className="flex min-h-screen bg-slate-100">
            <Sidebar />
            <main className="flex-1 overflow-auto">
                <div className="mx-auto max-w-7xl p-8">
                    {/* Header */}
                    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-4xl font-bold text-slate-800">
                                Donations
                            </h1>
                            <p className="mt-1 text-slate-500">
                                Manage all food donations
                            </p>
                        </div>
                        <Link
                            to="/donations/create"
                            className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow hover:bg-green-700"
                        >
                            + New Donation
                        </Link>
                    </div>
                    {/* Search */}
                    <SearchBar
                        value={search}
                        onChange={setSearch}
                        placeholder="Search food, donor or location, address..."
                    />
                    {/* Filters */}
                    <FilterPanel
                        category={category}
                        setCategory={setCategory}
                        status={status}
                        setStatus={setStatus}
                        sort={sort}
                        setSort={setSort}
                    />
                    {/* Grid */}
                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                        {filteredDonations.length > 0 ? (
                            filteredDonations.map((donation) => (

                                <DonationCard
                                    key={donation._id}
                                    donation={donation}
                                    onDelete={handleDelete}
                                    onClaim={handleClaimClick}
                                    onLocation={handleLocation}
                                />
                            ))
                        ) : (
                            <div className="col-span-full rounded-xl bg-white p-10 text-center shadow">
                                <h2 className="text-2xl font-semibold text-gray-700">
                                    No Donations Found
                                </h2>
                                <p className="mt-2 text-gray-500">
                                    Try changing your search or filters.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <ClaimModal
                    open={showClaimModal}
                    donation={selectedDonation}
                    loading={claimLoading}
                    onClose={() => {
                        setShowClaimModal(false);
                        setSelectedDonation(null);
                    }}
                    onConfirm={handleClaimConfirm}
                />

                <LocationCenterModal
                    open={showLocationCenter}
                    donation={selectedDonation}
                    onClose={() => {
                        setShowLocationCenter(false);
                        setSelectedDonation(null);
                    }}
                />

            </main>

        </div>
    );

}

export default Donations;