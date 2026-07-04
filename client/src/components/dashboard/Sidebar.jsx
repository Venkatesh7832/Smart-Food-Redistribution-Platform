import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  User,
  LogOut
} from "lucide-react";

import useAuth from "../../hooks/useAuth";

function Sidebar() {

  const { logout } = useAuth();

  return (

    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">

      <h1 className="text-2xl font-bold text-green-400">

        FoodLink AI

      </h1>

      <nav className="mt-10 flex flex-col gap-5">

        <Link
          className="flex items-center gap-3"
          to="/dashboard"
        >
          <LayoutDashboard size={20}/>
          Dashboard
        </Link>

        <Link
          className="flex items-center gap-3"
          to="/donations"
        >
          <Package size={20}/>
          Donations
        </Link>

        <Link
          className="flex items-center gap-3"
          to="/profile"
        >
          <User size={20}/>
          Profile
        </Link>

        <button
          onClick={logout}
          className="flex items-center gap-3 mt-8 text-red-400"
        >
          <LogOut size={20}/>
          Logout
        </button>

      </nav>

    </aside>

  );
}

export default Sidebar;