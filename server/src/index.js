const mongoose = require("mongoose");
const { server, io } = require("./app");
const { toogleAvailability } = require("./services/auth.service");

const mongooseOptions = {
  useUnifiedTopology: true,
};

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('register_availability', (data) => {
    console.log(`User ${socket.id} available ${data}`);
  });
  
  // Handle joining room for a specific organization
  socket.on('join_organisation', (data) => {
    try {
      socket.join(data.organisationId); // Join the room named after the organization
      console.log(`User ${socket.id} joined organization ${JSON.stringify(data)}`);
      const { available, organisationId, user } = data
      toogleAvailability(io, organisationId, user, available)
    } catch (e) {}
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});


mongoose
  .connect("mongodb://localhost:27017/torch", mongooseOptions)
  .then(() => {
    server.listen(3001, (port) => {
      console.log(`Server running ${port}`);
    });
  });
