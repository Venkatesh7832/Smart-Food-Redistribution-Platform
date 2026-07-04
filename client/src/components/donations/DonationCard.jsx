import {
    Calendar,
    Package,
    Trash2,
    Pencil,
} from "lucide-react";

import StatusBadge from "./StatusBadge";

function DonationCard({
    donation,
    onDelete,
    onEdit,
    onClaim,
}) {

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-2xl font-bold">

                {donation.foodName}

            </h2>

            <div className="mt-4 space-y-2">

                <p>

                    <Package
                        className="inline mr-2"
                        size={18}
                    />

                    {donation.availableQuantity} Meals

                </p>

                <p>

                    {donation.description}

                </p>

                <p>

                    <Calendar
                        className="inline mr-2"
                        size={18}
                    />

                    {new Date(
                        donation.expiryTime
                    ).toLocaleString()}

                </p>

            </div>

            <div className="flex gap-3 mt-6">

                <button
                    onClick={() => onEdit(donation)}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    <Pencil size={18}/>
                </button>

                <button
                    onClick={() => onDelete(donation._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                >
                    <Trash2 size={18}/>
                </button>

                <Link
                    to={`/donations/edit/${donation._id}`}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg" >
                    Edit
                </Link>

                {
                    <StatusBadge status={donation.status} /> === "available" &&

                    <button
                        onClick={() => onClaim(donation)}
                        className="bg-green-600 text-white px-4 py-2 rounded"
                    >

                        Claim

                    </button>

                }

            </div>

        </div>

    );

}

export default DonationCard;