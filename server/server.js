const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, ".env") });

const authRoutes = require("./routes/auth");
const eventRoutes = require("./routes/events");
// entry point for all booking-related endpoints
// (/api/bookings/send-otp, /api/bookings, /api/bookings/:id/confirm).
// whenever the User Client or Admin Client calls /api/bookings/...,
// it’s hitting this route registration first.
const bookingRoutes = require("./routes/bookings");
// app.use("/api/bookings", bookingRoutes);
const aiRoutes = require("./routes/ai");
const paymentRoutes = require("./routes/payments");
const uploadRoutes = require("./routes/upload");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API entry point registration
// Gatherly API (Express) Sequence diagram
// Express mounts the different route modules.
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/upload", uploadRoutes);

// Database Connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/gatherly")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
