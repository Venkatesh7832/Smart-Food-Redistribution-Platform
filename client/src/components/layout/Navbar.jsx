import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Navbar() {

    const { isAuthenticated, logout, user } = useAuth();

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <Link
                    to="/"
                    className="text-3xl font-bold text-green-600"
                >
                    FoodLink AI
                </Link>

                <div className="flex items-center gap-6">

                    <Link to="/">Home</Link>

                    <Link to="/donations">Donations</Link>

                    {

                        isAuthenticated ?

                        <>

                            <Link to="/dashboard">

                                Dashboard

                            </Link>

                            <span>

                                {user?.name}

                            </span>

                            <button

                                onClick={logout}

                                className="bg-red-500 text-white px-4 py-2 rounded"

                            >

                                Logout

                            </button>

                        </>

                        :

                        <>

                            <Link to="/login">

                                Login

                            </Link>

                            <Link

                                to="/register"

                                className="bg-green-600 text-white px-4 py-2 rounded"

                            >

                                Register

                            </Link>

                        </>

                    }

                </div>

            </div>

        </nav>
    );
}

export default Navbar;