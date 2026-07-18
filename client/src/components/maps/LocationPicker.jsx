import { useEffect, useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function LocationMarker({
    position,
    setPosition,
    onLocationSelect,
}) {
    useMapEvents({
        click(e) {
            const newLocation = {
                lat: e.latlng.lat,
                lng: e.latlng.lng,
            };

            setPosition(newLocation);

            if (onLocationSelect) {
                onLocationSelect(newLocation);
            }
        },
    });

    if (!position) return null;

    return (
        <Marker position={[position.lat, position.lng]}>
            <Popup>
                Pickup Location
                <br />
                {position.lat.toFixed(6)},
                {" "}
                {position.lng.toFixed(6)}
            </Popup>
        </Marker>
    );
}

export default function LocationPicker({
    initialPosition = null,
    onLocationSelect,
}) {
    const defaultCenter = {
        lat: 17.385044,
        lng: 78.486671,
    };

    const [position, setPosition] = useState(
        initialPosition || defaultCenter
    );

    useEffect(() => {
        if (initialPosition) {
            setPosition(initialPosition);
        }
    }, [initialPosition]);

    return (
        <div className="space-y-4">

            <MapContainer
                center={[position.lat, position.lng]}
                zoom={13}
                scrollWheelZoom
                className="h-[400px] w-full rounded-xl border shadow"
            >

                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <LocationMarker
                    position={position}
                    setPosition={setPosition}
                    onLocationSelect={onLocationSelect}
                />

            </MapContainer>

            <div className="rounded-lg bg-slate-100 p-4">

                <h3 className="font-semibold mb-2">
                    Selected Coordinates
                </h3>

                <p>
                    <strong>Latitude:</strong>{" "}
                    {position.lat.toFixed(6)}
                </p>

                <p>
                    <strong>Longitude:</strong>{" "}
                    {position.lng.toFixed(6)}
                </p>

            </div>

        </div>
    );
}