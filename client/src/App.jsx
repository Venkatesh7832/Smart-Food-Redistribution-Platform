import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";

import ProtectedRoute from "./routes/ProtectedRoute";
import Donations from "./pages/Donations/Donations";
import CreateDonation from "./pages/Donations/CreateDonation";
import EditDonation from "./pages/Donations/EditDonation";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route
                    path="/dashboard"
                    element={
                    <ProtectedRoute>
                    <Dashboard/>
                    </ProtectedRoute>
                    }
                />
                <Route

                    path="/donations"

                    element={
                        <ProtectedRoute>
                        <Donations/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/donations/create"
                    element={
                        <ProtectedRoute>
                        <CreateDonation/>
                        </ProtectedRoute>
                    }
                    />
                    <Route
                        path="/donations/edit/:id"
                        element={
                            <ProtectedRoute>
                                <EditDonation />
                            </ProtectedRoute>
                        }
                    />
            </Routes>

        </BrowserRouter>

    );

}

export default App;