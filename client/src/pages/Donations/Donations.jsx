import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import Sidebar from "../../components/dashboard/Sidebar";

import DonationCard from "../../components/donations/DonationCard";
import SearchBar from "../../components/donations/SearchBar";
import FilterPanel from "../../components/donations/FilterPanel";

import {
    getDonations,
    deleteDonation,
} from "../../services/donationService";

function Donations() {

    const [donations, setDonations] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");
    const [sort, setSort] = useState("newest");

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

    return (

        <div className="flex">

            <Sidebar />

            <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Search food, donor, or location..."
            />

            <FilterPanel
                category={category}
                setCategory={setCategory}
                status={status}
                setStatus={setStatus}
                sort={sort}
                setSort={setSort}
            />
            
            <div className="flex-1 p-8 bg-slate-100">

                <div className="flex justify-between items-center">

                    <h1 className="text-4xl font-bold">
                        Donations
                        </h1>
                        <Link
                            to="/donations/create"
                            className="bg-green-600 text-white px-6 py-3 rounded"
                        >
                    + New Donation
                    </Link>
                </div>
                <Link
                        to={`/donations/edit/${donation._id}`}
                        className="btn btn-warning"
                    >
                        Edit
                </Link>

                <div className="grid md:grid-cols-3 gap-6 mt-6">

                    {(() => {
                        const filteredDonations = donations.filter((donation) => {
                            const query = search.toLowerCase();

                                return (
                                donation.foodName?.toLowerCase().includes(query) ||
                                donation.pickupAddress?.toLowerCase().includes(query) ||
                                donation.donor?.name?.toLowerCase().includes(query)
                                );
                            })
                            .filter((donation) =>
                                category ? donation.category === category : true
                            )
                            .filter((donation) =>
                                status ? donation.status === status : true
                            )
                            .sort((a, b) => {
                                if (sort === "newest")
                                return new Date(b.createdAt) - new Date(a.createdAt);

                                if (sort === "oldest")
                                return new Date(a.createdAt) - new Date(b.createdAt);

                                if (sort === "expiry")
                                return new Date(a.expiryTime) - new Date(b.expiryTime);

                                return 0;
                            });
                        
                    })()}
                </div>

            </div>

        </div>

    );

}

export default Donations;