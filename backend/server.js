import express from 'express'
import bookingRouter from './routes/booking';
const app = express();
app.use(express.json())
const PORT=3000

app.use("/bookings",bookingRouter)
app.get("/", (req, res) => {
  res.send("Booking API is running ");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});