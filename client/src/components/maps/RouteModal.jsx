import RouteMap from "./RouteMap";

export default function RouteModal({

    open,

    donation,

    onClose,

}) {

    if (!open || !donation) return null;

    const donor = {

        lat: donation.pickupLocation.latitude,

        lng: donation.pickupLocation.longitude,

    };

    // Temporary NGO Location

    const ngo = {

        lat: 17.412,

        lng: 78.448,

    };

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white rounded-xl w-11/12 max-w-5xl p-6">

                <div className="flex justify-between items-center mb-4">

                    <h2 className="text-2xl font-bold">

                        Route Navigation

                    </h2>

                    <button

                        onClick={onClose}

                        className="bg-red-500 text-white px-4 py-2 rounded"

                    >

                        Close

                    </button>

                </div>

                <RouteMap

                    start={donor}

                    end={ngo}

                />

            </div>

        </div>

    );

}