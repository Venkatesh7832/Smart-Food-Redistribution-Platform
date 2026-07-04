import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { registerUser } from "../../services/authService";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "donor",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await registerUser(form);

      toast.success("Registration Successful");

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-8">
          Register
        </h1>

        <input
          name="name"
          placeholder="Name"
          className="w-full border p-3 rounded-lg mb-3"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-3"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          className="w-full border p-3 rounded-lg mb-3"
          onChange={handleChange}
        />

        <select
          name="role"
          className="w-full border p-3 rounded-lg mb-3"
          onChange={handleChange}
        >
          <option value="donor">Donor</option>
          <option value="ngo">NGO</option>
        </select>

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-5"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
        >
          {loading ? "Creating..." : "Register"}
        </button>

        <p className="text-center mt-6">
          Already have an account?

          <Link
            className="text-green-600 ml-2"
            to="/login"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;