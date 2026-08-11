import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_INFO } from "@/constants/contact";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const DATA_FILE = path.join(process.cwd(), "src", "data", "testimonials.json");

// Helper to read testimonials from JSON file
function readTestimonials() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, "utf8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Error reading testimonials JSON:", err);
  }
  return [];
}

// Helper to write testimonials to JSON file
function writeTestimonials(testimonials: any[]) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(testimonials, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing testimonials JSON:", err);
  }
}

// GET: Fetch all approved testimonials
export async function GET() {
  try {
    const testimonials = readTestimonials();
    const approved = testimonials.filter((t: any) => t.status === "approved");
    return NextResponse.json(approved, { status: 200 });
  } catch (error) {
    console.error("GET /api/testimonial error:", error);
    return NextResponse.json(
      { error: "Failed to load testimonials." },
      { status: 500 }
    );
  }
}

// POST: Submit a new testimonial for review
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

    // Determine host for approval URL links
    const host = request.headers.get("host") || "aqrawi-project.vercel.app";
    const proto = request.headers.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
    const baseUrl = `${proto}://${host}`;

    // Create unique ID, secret approval token, and initials
    const id = `test_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const token = crypto.randomBytes(16).toString("hex");
    const initials = name
      .split(" ")
      .map((n: string) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    const newTestimonial = {
      id,
      name,
      email,
      phone: phone || "",
      title: title || "Client",
      rating: Number(rating) || 5,
      text: testimonial,
      initials,
      img: "",
      status: "pending",
      token,
      createdAt: new Date().toISOString(),
    };

    // Save pending testimonial
    const existing = readTestimonials();
    existing.push(newTestimonial);
    writeTestimonials(existing);

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.RECEIVER_EMAIL || CONTACT_INFO.email;
    const senderEmail =
      process.env.SENDER_EMAIL || "Aqrawi Law Firm <onboarding@resend.dev>";

    console.log("=== New Testimonial Pending Approval ===");
    console.log(`ID: ${id}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Rating: ${rating || 5} Stars`);
    console.log(`Text: ${testimonial}`);
    console.log("=========================================");

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      const approveUrl = `${baseUrl}/api/testimonial/approve?id=${id}&token=${token}&action=approve`;
      const rejectUrl = `${baseUrl}/api/testimonial/approve?id=${id}&token=${token}&action=reject`;

      await resend.emails.send({
        from: senderEmail,
        to: [recipientEmail],
        replyTo: email,
        subject: `[Aqrawi Law Firm] 🔔 Testimonial Approval Request from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 28px; border: 2px solid #bf953f; border-radius: 10px; background-color: #ffffff;">
            <h2 style="color: #bf953f; font-size: 22px; border-bottom: 2px solid #bf953f; padding-bottom: 12px; margin-top: 0;">
              ⭐ New Client Testimonial Awaiting Approval
            </h2>
            <p style="font-size: 15px; color: #333; margin: 8px 0;"><strong>Client Name:</strong> ${name}</p>
            <p style="font-size: 15px; color: #333; margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #bf953f;">${email}</a></p>
            <p style="font-size: 15px; color: #333; margin: 8px 0;"><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p style="font-size: 15px; color: #333; margin: 8px 0;"><strong>Client Role:</strong> ${title || "Client"}</p>
            <p style="font-size: 15px; color: #333; margin: 8px 0;"><strong>Rating:</strong> ${"⭐".repeat(Number(rating) || 5)} (${rating || 5}/5 Stars)</p>
            
            <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 20px 0;" />
            
            <p style="font-size: 15px; color: #111; font-weight: bold; margin-bottom: 8px;">Submitted Testimonial Text:</p>
            <blockquote style="background: #faf8f5; border-left: 4px solid #bf953f; margin: 0; padding: 16px 20px; color: #222; font-size: 15px; line-height: 1.6; font-style: italic; border-radius: 4px;">
              "${testimonial.replace(/\n/g, "<br />")}"
            </blockquote>

            <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 24px 0;" />

            <div style="text-align: center; margin-top: 24px;">
              <p style="font-size: 14px; color: #666; margin-bottom: 16px;"><strong>Review Decision Required:</strong> Click a button below to publish or discard this review on the website.</p>
              
              <a href="${approveUrl}" style="background-color: #bf953f; color: #ffffff; text-decoration: none; padding: 14px 28px; font-size: 15px; font-weight: bold; border-radius: 6px; display: inline-block; margin-right: 12px;">
                ✅ Approve & Publish Live
              </a>
              
              <a href="${rejectUrl}" style="background-color: #d9534f; color: #ffffff; text-decoration: none; padding: 14px 28px; font-size: 15px; font-weight: bold; border-radius: 6px; display: inline-block;">
                ❌ Reject & Discard
              </a>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your testimonial has been submitted to Aqrawi Law Firm for review.",
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
