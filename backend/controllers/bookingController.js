import transporter from "../config/mailer.js";


const createBooking = async (req, res) => {
  console.log('port here',process.env.PORT)
  try {
    const { names, email, phone_number, service, meetingtype, date, time } = req.body;

    if (!names || !email || !phone_number || !service || !meetingtype || !date || !time) {
      return res.status(400).json({ error: "Missing required booking details" });
    }

    const info = await transporter.sendMail({
      from: `"Bookings" <your_email@gmail.com>`, 
      to: email,
      subject: "Booking Confirmation",
      text: `Hi ${names}, your booking for ${service} on ${date} at ${time} is confirmed.`,
      html: `<p>Hi <b>${names}</b>, your booking for <b>${service}</b> on <b>${date}</b> at <b>${time}</b> is confirmed.</p>`
    });

    res.status(201).json({
      message: "Booking created successfully",
      booking: { names, email, phone_number, service, meetingtype, date, time },
      mailId: info.messageId
    });

  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default createBooking;
