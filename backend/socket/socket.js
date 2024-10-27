import { Server } from 'socket.io';

// In-memory storage for room data
const rooms = {};

// Initialize Socket.IO and define events
const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*", // Allow all origins (adjust for production)
      methods: ["GET", "POST"],
    },
  });

  // Handle new connections
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Event: Join room
    socket.on('join-room', ({ roomId, userId }) => {
      socket.join(roomId);  // Add user to room
      rooms[roomId] = rooms[roomId] || [];
      rooms[roomId].push(userId);

      console.log(`${userId} joined room ${roomId}`);

      // Notify other users in the room
      socket.broadcast.to(roomId).emit('user-connected', userId);
    });

    // Event: Disconnect
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
      // Optional: Handle room cleanup logic here if needed
    });
  });

  return io;
};

export default initializeSocket;
