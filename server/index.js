import mongoose from "mongoose";
import { app } from "./src/app.js";
import dotenv from 'dotenv';

dotenv.config()


const mongooseOptions = {
  useUnifiedTopology: true,
};
 

// io.on('connection', (socket) => {
//   console.log('A user connected:', socket.id);

//   socket.on('register_availability', (data) => {
//     console.log(`User ${socket.id} available ${data}`);
//   });
  
//   // Handle joining room for a specific organization
//   socket.on('join_organisation', (data) => {
//     try {
//       socket.join(data.organisationId); // Join the room named after the organization
//       console.log(`User ${socket.id} joined organization ${JSON.stringify(data)}`);
//       const { available, organisationId, user } = data
//       toogleAvailability(io, organisationId, user, available)
//     } catch (e) {}
//   });

//   // Handle disconnection
//   socket.on('disconnect', () => {
//     console.log('User disconnected:', socket.id);
//   });
// });


mongoose
  .connect(process.env.MONGO_SERVER_URL, mongooseOptions)
  .then((mongoose) => {
    console.log("Database connected")
    app.listen(process.env.PORT || 3001, (port) => {
      console.log(`Server running ${port}`);
    });
  });
