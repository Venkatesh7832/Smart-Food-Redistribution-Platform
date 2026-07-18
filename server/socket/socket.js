const { Server } = require("socket.io");

let io;

const initializeSocket = (server) => {

    io = new Server(server, {
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST"],
            credentials: true,
        },
    });

    io.on("connection", (socket) => {

        console.log("✅ Socket Connected:", socket.id);

        socket.on("disconnect", () => {
            console.log("❌ Socket Disconnected:", socket.id);
        });

    });

};

const getIO = () => io;

module.exports = {
    initializeSocket,
    getIO,
};