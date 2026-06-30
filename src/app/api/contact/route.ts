import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, subject } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Log the submission (visible in server console/logs)
    console.log("=== Contact Form Submission ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone || "N/A"}`);
    console.log(`Subject: ${subject || "General Inquiry"}`);
    console.log(`Message: ${message}`);
    console.log("===============================");

    // NOTE FOR DEPLOYMENT: 
    // To make this fully functional (send emails to the firm), the site owner can 
    // configure a mailer service like Nodemailer or Resend.
    // Example NodeMailer configuration snippet:
    /*
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL || "info@aqrawilaw.com",
      subject: `Aqrawi Web Form: ${subject || "New Inquiry"}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`,
    });
    */

    return NextResponse.json(
      { success: true, message: "Thank you! Your inquiry has been submitted." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return NextResponse.json(
      { error: "Failed to submit form. Please try again later." },
      { status: 500 }
    );
  }
}
