import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function DonationMap({ donation }) {

    if (
        !donation?.pickupLocation ||
        donation.pickupLocation.latitude == null ||
        donation.pickupLocation.longitude == null
    ) {
        return (
            <div className="flex h-80 items-center justify-center rounded-xl border bg-gray-100">
                <p className="text-gray-500">
                    No location available.
                </p>
            </div>
        );
    }

    const position = [
        donation.pickupLocation.latitude,
        donation.pickupLocation.longitude,
    ];

    return (
        <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom
            className="h-80 w-full rounded-xl"
        >
            <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>
                    <strong>{donation.foodName}</strong>

                    <br />

                    {donation.pickupAddress}
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default DonationMap;