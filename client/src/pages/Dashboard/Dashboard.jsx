    import Sidebar from "../../components/dashboard/Sidebar";

    import StatsGrid from "../../components/dashboard/StatsGrid";

    import useAuth from "../../hooks/useAuth";

    function Dashboard(){

    const {user}=useAuth();

    return(

    <div className="flex">

    <Sidebar/>

    <div className="flex-1 bg-slate-100 min-h-screen p-8">

    <h1 className="text-4xl font-bold">

    Welcome,

    <span className="text-green-600">

    {user?.name}

    </span>

    </h1>

    <p className="text-gray-600 mt-2">

    Manage your donations efficiently.

    </p>

    <div className="mt-10">

    <StatsGrid/>

    </div>

    <div className="mt-10 bg-white rounded-xl p-6 shadow">

    <h2 className="text-2xl font-bold">

    Recent Activity

    </h2>

    <p className="mt-3 text-gray-500">

    Recent donations will appear here.

    </p>

    </div>

    </div>

    </div>

    )

    }

    export default Dashboard;