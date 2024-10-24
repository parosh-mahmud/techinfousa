import nodemailer from "nodemailer";
import { promises as fs } from "fs";

// Disable the bodyParser to handle FormData manually
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Dynamically import formidable
      const formidable = await import("formidable");

      // Correctly initialize the form parser
      const form = new formidable.IncomingForm();

      // Parse the form data
      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error("Form parsing error:", err);
          return res.status(500).json({ message: "Error parsing form data." });
        }

        // Extract fields and file
        const { name, email, phone, message } = fields;
        const attachment = files.file; // The uploaded file, if present

        // Ensure all required fields are present
        if (!name || !email || !phone || !message) {
          return res.status(400).json({
            message:
              "Please provide all required fields (name, email, phone, message).",
          });
        }

        // Log file info to check if it's being captured
        console.log("File info: ", attachment);

        // Prepare attachments array
        let attachments = [];

        if (attachment && attachment.filepath) {
          try {
            // Read file content
            const fileData = await fs.readFile(attachment.filepath);
            attachments.push({
              filename: attachment.originalFilename || "attachment",
              content: fileData, // The content of the file
              contentType: attachment.mimetype, // File MIME type
            });
          } catch (readFileError) {
            console.error("Error reading file: ", readFileError);
            return res
              .status(500)
              .json({ message: "Failed to read the uploaded file." });
          }
        } else {
          console.error("No file path found or invalid file.");
        }

        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
          host: "smtppro.zoho.com",
          port: 465,
          secure: true, // Use SSL
          auth: {
            user: "info@techinfousa.com", // Your Zoho email
            pass: "techinfo@#@1P", // Your Zoho email password (hardcoded)
          },
        });

        // Prepare email options
        const mailOptions = {
          from: "info@techinfousa.com", // Your Zoho email
          to: "info@techinfousa.com", // Recipient email
          replyTo: email, // User's email for replies
          subject: `Message sent from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
          attachments: attachments.length > 0 ? attachments : [], // Add the attachment if it exists
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: "Message sent successfully!" });
      });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({
        message: "Failed to send the message. Please try again later.",
      });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
