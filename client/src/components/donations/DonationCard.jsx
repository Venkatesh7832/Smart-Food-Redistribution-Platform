import { Link } from "react-router-dom";
import {
    Calendar,
    Package,
    MapPin,
    FileText,
    Pencil,
    Trash2,
    Handshake,
} from "lucide-react";

import StatusBadge from "./StatusBadge";

function DonationCard({
    donation,
    onDelete,
    onClaim,
    onViewMap
}) {

    return (

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden">

            {/* Header */}

            <div className="p-5 border-b">

                <div className="flex justify-between items-start">

                    <h2 className="text-xl font-bold text-gray-800">

                        {donation.foodName}

                    </h2>

                    <StatusBadge status={donation.status} />

                </div>

            </div>

            {/* Body */}

            <div className="p-5 space-y-4">

                <div className="flex items-center gap-2 text-gray-700">

                    <Package size={18} />

                    <span>
                        <strong>
                            {donation.remainingQuantity ??
                                donation.availableQuantity}
                        </strong>{" "}
                        Meals Available
                    </span>

                </div>

                <div className="flex items-start gap-2 text-gray-700">

                    <MapPin size={18} className="mt-1"/>

                    <span>

                        {donation.pickupAddress}

                    </span>

                </div>

                <div className="flex items-start gap-2 text-gray-700">

                    <FileText size={18} className="mt-1"/>

                    <span>

                        {donation.description}

                    </span>

                </div>

                <div className="flex items-center gap-2 text-gray-700">

                    <Calendar size={18} />

                    <span>

                        {new Date(
                            donation.expiryTime
                        ).toLocaleString()}

                    </span>

                </div>

            </div>

            {/* Footer */}

            <div className="bg-gray-50 border-t p-4">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    

                    <Link
                        to={`/donations/edit/${donation._id}`}
                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 transition"
                    >

                        <Pencil size={18} />

                        Edit

                    </Link>

                    <button
                        onClick={() => onDelete(donation._id)}
                        className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white rounded-lg py-2 transition"
                    >

                        <Trash2 size={18} />

                        Delete

                    </button>

                    {donation.status === "available" ? (

                        <button
                            onClick={() => onClaim(donation)}
                            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 transition"
                        >

                            <Handshake size={18} />

                            Claim

                        </button>

                    ) : (

                        <button
                            disabled
                            className="bg-gray-300 text-gray-600 rounded-lg py-2 cursor-not-allowed"
                        >

                            Claimed

                        </button>

                    )}

                    <button
                        onClick={() => onViewMap(donation)}
                        className="rounded-lg bg-slate-700 py-2 text-white hover:bg-slate-800"
                    >
                        🗺 View Map
                    </button>

                    <button
                        onClick={()=>onRoute(donation)}
                        className="bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700"
                        >
                        🚗 Route
                    </button>

                </div>

            </div>

        </div>

    );

}

export default DonationCard;