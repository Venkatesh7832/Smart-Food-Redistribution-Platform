import DonationMap from "./DonationMap";

function MapModal({ open, donation, onClose }) {

    if (!open || !donation) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

            <div className="w-full max-w-3xl rounded-xl bg-white p-6 shadow-xl">

                <div className="mb-5 flex items-center justify-between">

                    <h2 className="text-2xl font-bold">
                        {donation.foodName}
                    </h2>

                    <button
                        onClick={onClose}
                        className="rounded-lg bg-red-500 px-4 py-2 text-white"
                    >
                        Close
                    </button>

                </div>

                <DonationMap donation={donation} />

                <div className="mt-5 rounded-lg bg-slate-100 p-4">

                    <p>
                        <strong>Address:</strong>
                        {" "}
                        {donation.pickupAddress}
                    </p>

                    <p>
                        <strong>Latitude:</strong>
                        {" "}
                        {donation.pickupLocation?.latitude}
                    </p>

                    <p>
                        <strong>Longitude:</strong>
                        {" "}
                        {donation.pickupLocation?.longitude}
                    </p>

                </div>

            </div>

        </div>
    );
}

export default MapModal;