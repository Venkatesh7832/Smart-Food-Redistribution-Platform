import React from "react";
import ReactDOM from "react-dom/client";

import { Toaster } from "react-hot-toast";

import App from "./App";

import "./index.css";

import AuthProvider from "./context/AuthContext.jsx";
import { Socket } from "socket.io-client";
import { SocketProvider } from "./context/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster position="top-right" />
      <SocketProvider>
        
        <App />

      </SocketProvider>
    </AuthProvider>
  </React.StrictMode>
);