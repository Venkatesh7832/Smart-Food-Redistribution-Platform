import { useEffect } from "react";
import {
    MapContainer,
    Marker,
    TileLayer,
    useMap,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function Routing({ start, end }) {

    const map = useMap();

    useEffect(() => {

        if (!start || !end) return;

        const routingControl = L.Routing.control({

            waypoints: [

                L.latLng(start.lat, start.lng),

                L.latLng(end.lat, end.lng),

            ],

            lineOptions: {
                styles: [
                    {
                        color: "#16a34a",
                        weight: 5,
                    },
                ],
            },

            draggableWaypoints: false,

            addWaypoints: false,

            fitSelectedRoutes: true,

            show: false,

        }).addTo(map);

        return () => map.removeControl(routingControl);

    }, [map, start, end]);

    return null;
}

export default function RouteMap({

    start,

    end,

}) {

    return (

        <MapContainer
            center={[start.lat, start.lng]}
            zoom={13}
            className="h-[500px] w-full rounded-xl"
        >

            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[start.lat, start.lng]} />

            <Marker position={[end.lat, end.lng]} />

            <Routing
                start={start}
                end={end}
            />

        </MapContainer>

    );

}