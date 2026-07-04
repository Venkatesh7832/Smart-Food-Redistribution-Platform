const STATUS_STYLES = {
  available: "bg-green-100 text-green-700",
  reserved: "bg-yellow-100 text-yellow-700",
  claimed: "bg-blue-100 text-blue-700",
  completed: "bg-purple-100 text-purple-700",
  expired: "bg-red-100 text-red-700",
  cancelled: "bg-gray-100 text-gray-700",
};

const StatusBadge = ({ status }) => {
  const badgeClass =
    STATUS_STYLES[status?.toLowerCase()] ||
    "bg-gray-100 text-gray-700";

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${badgeClass}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;