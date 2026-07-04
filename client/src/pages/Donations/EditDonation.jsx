const EditDonation = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        foodName: "",
        description: "",
        totalQuantity: "",
        pickupAddress: "",
        expiryTime: "",
    });


    useEffect(() => {
        const fetchDonation = async () => {
            try {
                const res = await api.get(`/donations/${id}`);

                setFormData({
                    foodName: res.data.donation.foodName,
                    description: res.data.donation.description,
                    totalQuantity: res.data.donation.totalQuantity,
                    pickupAddress: res.data.donation.pickupAddress,
                    expiryTime: res.data.donation.expiryTime.slice(0,16)
                });

            } catch (err) {

                toast.error("Unable to load donation");

            } finally {

                setLoading(false);

            }
        };

        fetchDonation();

    }, [id]);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.put(`/donations/${id}`, formData);

            toast.success("Donation updated");

            navigate("/donations");

        } catch (err) {

            toast.error(err.response?.data?.message || "Update failed");

        }
    }
};