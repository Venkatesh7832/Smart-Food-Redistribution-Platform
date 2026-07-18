import { useEffect, useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import useAuth from "../../hooks/useAuth";

function Profile() {
    const { user } = useAuth();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (user) {
            setProfile(user);
        }
    }, [user]);

    return (
        <div className="flex min-h-screen bg-slate-100">
            <Sidebar />

            <main className="flex-1 p-8">
                <div className="max-w-4xl mx-auto">

                    <h1 className="text-4xl font-bold text-slate-800">
                        My Profile
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Manage your account information
                    </p>

                    <div className="mt-8 rounded-2xl bg-white shadow p-8">

                        <div className="grid md:grid-cols-2 gap-6">

                            <div>
                                <label className="block text-gray-500 mb-1">
                                    Name
                                </label>

                                <input
                                    value={profile?.name || ""}
                                    readOnly
                                    className="w-full rounded-lg border px-4 py-3"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-500 mb-1">
                                    Email
                                </label>

                                <input
                                    value={profile?.email || ""}
                                    readOnly
                                    className="w-full rounded-lg border px-4 py-3"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-500 mb-1">
                                    Role
                                </label>

                                <input
                                    value={profile?.role || ""}
                                    readOnly
                                    className="w-full rounded-lg border px-4 py-3"
                                />
                            </div>

                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
}

export default Profile;