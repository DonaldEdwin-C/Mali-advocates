import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import cors from "cors";
import bookingRouter from "./routes/booking.js";

// reconstruct __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// now dotenv can load relative to backend/
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
console.log("PORT", PORT);

app.use("/bookings", bookingRouter);
app.get("/", (req, res) => {
  res.send("Booking API is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
