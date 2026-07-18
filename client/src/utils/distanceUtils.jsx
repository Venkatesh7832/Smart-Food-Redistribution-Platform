

export function calculateDistance(start, end) {

    const R = 6371; // Earth's radius in km

    const dLat = toRadians(end.lat - start.lat);
    const dLng = toRadians(end.lng - start.lng);

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRadians(start.lat)) *
        Math.cos(toRadians(end.lat)) *
        Math.sin(dLng / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

function toRadians(value) {
    return value * (Math.PI / 180);
}

export function estimateDrivingTime(distanceKm) {

    const averageSpeed = 40; // km/h (city average)

    const hours = distanceKm / averageSpeed;

    return Math.round(hours * 60);
}

export function formatDistance(distance) {
    return distance.toFixed(2);
}