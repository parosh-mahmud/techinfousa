import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@techinfousa.com", // Your Zoho email
        pass: "techinfo@#@1P", // Use environment variable for security
      },
    });

    try {
      // Email options
      const mailOptions = {
        from: "info@techinfousa.com", // Your Zoho email
        to: "info@techinfousa.com", // Recipient (could be the same email)
        replyTo: email, // User's email for reply
        subject: `Contact Form Submitted by ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      };
      // Send email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error sending message" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
