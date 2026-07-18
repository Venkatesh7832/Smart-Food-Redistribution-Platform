import { useEffect, useState } from "react";

function ClaimModal({
    open,
    donation,
    loading,
    onClose,
    onConfirm,
}) {
    const [quantity, setQuantity] = useState("");

    useEffect(() => {
        if (open) {
            setQuantity("");
        }
    }, [open]);

    if (!open || !donation) return null;

    const remaining =
        donation.remainingQuantity ??
        donation.availableQuantity ??
        donation.totalQuantity ??
        0;

    const handleSubmit = () => {
        const qty = Number(quantity);

        if (!qty || qty <= 0) {
            return alert("Enter a valid quantity");
        }

        if (qty > remaining) {
            return alert(
                `Only ${remaining} meals are available`
            );
        }

        onConfirm(qty);
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">

            <div className="bg-white rounded-xl p-6 w-[420px] shadow-xl">

                <h2 className="text-2xl font-bold">
                    Claim Donation
                </h2>

                <p className="mt-3 text-gray-600">
                    {donation.foodName}
                </p>

                <p className="mt-2">
                    Remaining :
                    <span className="font-bold ml-2">
                        {remaining}
                    </span>
                </p>

                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                        setQuantity(e.target.value)
                    }
                    placeholder="Meals to claim"
                    className="w-full mt-5 border rounded-lg px-4 py-3"
                />

                <div className="flex justify-end gap-3 mt-6">

                    <button
                        onClick={onClose}
                        className="px-5 py-2 border rounded-lg"
                    >
                        Cancel
                    </button>

                    <button
                        disabled={loading}
                        onClick={handleSubmit}
                        className="px-5 py-2 bg-green-600 text-white rounded-lg disabled:opacity-60"
                    >
                        {loading
                            ? "Claiming..."
                            : "Claim"}
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ClaimModal;