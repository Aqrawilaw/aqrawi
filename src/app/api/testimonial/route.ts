import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_INFO } from "@/constants/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, testimonial, rating, title } = body;

    // Validate required fields
    if (!name || !email || !testimonial) {
      return NextResponse.json(
        { error: "Name, email, and testimonial text are required." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.RECEIVER_EMAIL || CONTACT_INFO.email;
    const senderEmail =
      process.env.SENDER_EMAIL || "Aqrawi Law Firm <onboarding@resend.dev>";

    console.log("=== Testimonial Submission Received ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone || "N/A"}`);
    console.log(`Title: ${title || "Client"}`);
    console.log(`Rating: ${rating || "5"} Stars`);
    console.log(`Testimonial: ${testimonial}`);
    console.log("=======================================");

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      const { data, error } = await resend.emails.send({
        from: senderEmail,
        to: [recipientEmail],
        replyTo: email,
        subject: `[Aqrawi Law Firm] New Testimonial Submitted by ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #d4af37; border-radius: 8px; background-color: #ffffff;">
            <h2 style="color: #bf953f; border-bottom: 2px solid #bf953f; padding-bottom: 8px; margin-top: 0;">
              ⭐ New Client Testimonial Received
            </h2>
            <p style="font-size: 15px; color: #333;"><strong>Client Name:</strong> ${name}</p>
            <p style="font-size: 15px; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #bf953f;">${email}</a></p>
            <p style="font-size: 15px; color: #333;"><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p style="font-size: 15px; color: #333;"><strong>Client Title/Role:</strong> ${title || "Client"}</p>
            <p style="font-size: 15px; color: #333;"><strong>Rating:</strong> ${rating || "5"} / 5 Stars</p>
            <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 20px 0;" />
            <p style="font-size: 15px; color: #333;"><strong>Testimonial:</strong></p>
            <blockquote style="background: #faf8f5; border-left: 4px solid #bf953f; margin: 0; padding: 14px 18px; color: #222; font-size: 14px; line-height: 1.6; font-style: italic;">
              "${testimonial.replace(/\n/g, "<br />")}"
            </blockquote>
          </div>
        `,
      });

      if (error) {
        console.error("Resend API Error:", error);
        return NextResponse.json(
          { error: "Failed to send testimonial email via Resend.", details: error },
          { status: 500 }
        );
      }

      console.log("Testimonial email successfully sent via Resend:", data);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your testimonial has been submitted to Aqrawi Law Firm.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling testimonial submission:", error);
    return NextResponse.json(
      { error: "Failed to process testimonial. Please try again later." },
      { status: 500 }
    );
  }
}
