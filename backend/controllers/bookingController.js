
import transporter from "../config/mailer";

const createBooking = async (req, res) => {
  const { name, email, date } = req.body;

  if (!name || !email || !date) {
    return res.status(400).json({ error: "Missing booking details" });
  }

  try {
    // send confirmation email
    const info = await transporter.sendMail({
      from: '"Bookings" <maddison53@ethereal.email>',
      to: email,
      subject: "Booking Confirmation",
      text: `Hi ${name}, your booking for ${date} is confirmed.`,
      html: `<p>Hi <b>${name}</b>, your booking for <b>${date}</b> is confirmed.</p>`,
    });

    res.json({
      message: "Booking created successfully",
      booking: { name, email, date },
      mailId: info.messageId,
    });
  } catch (error) {
    console.error("Error sending mail:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default createBooking
