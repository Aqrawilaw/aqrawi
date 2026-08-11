import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "src", "data", "testimonials.json");

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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const token = searchParams.get("token");
  const action = searchParams.get("action"); // "approve" | "reject"

  if (!id || !token) {
    return new NextResponse("Invalid request parameters.", { status: 400 });
  }

  const testimonials = readTestimonials();
  const index = testimonials.findIndex((t: any) => t.id === id && t.token === token);

  if (index === -1) {
    return new NextResponse(
      `<html>
        <body style="font-family: sans-serif; text-align: center; padding: 50px; background: #faf9f7;">
          <h2 style="color: #c9302c;">Invalid or Expired Moderation Link</h2>
          <p style="color: #666;">This testimonial link could not be found or has already been processed.</p>
        </body>
      </html>`,
      { headers: { "Content-Type": "text/html" }, status: 404 }
    );
  }

  const item = testimonials[index];
  const isApprove = action === "approve";

  item.status = isApprove ? "approved" : "rejected";
  writeTestimonials(testimonials);

  const statusText = isApprove
    ? "✅ Approved & Published Live!"
    : "❌ Rejected & Discarded";

  const messageText = isApprove
    ? `The testimonial by <strong>${item.name}</strong> is now live on the Aqrawi Law Firm website.`
    : `The testimonial by <strong>${item.name}</strong> has been rejected and will not be displayed.`;

  return new NextResponse(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Testimonial Moderation - Aqrawi Law Firm</title>
      <style>
        body {
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          background-color: #111111;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          margin: 0;
          padding: 20px;
        }
        .card {
          background-color: #1a1a1a;
          border: 2px solid #bf953f;
          border-radius: 12px;
          padding: 40px;
          max-width: 550px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(0,0,0,0.5);
        }
        .icon {
          font-size: 54px;
          margin-bottom: 16px;
        }
        h1 {
          color: #bf953f;
          font-size: 24px;
          margin-bottom: 12px;
        }
        p {
          color: #cccccc;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .testimonial-box {
          background: #252525;
          border-left: 4px solid #bf953f;
          padding: 16px;
          text-align: left;
          font-style: italic;
          color: #e0e0e0;
          margin-bottom: 24px;
          border-radius: 4px;
        }
        .btn {
          display: inline-block;
          background: #bf953f;
          color: #ffffff;
          padding: 12px 28px;
          text-decoration: none;
          font-weight: bold;
          border-radius: 6px;
          transition: background 0.3s ease;
        }
        .btn:hover {
          background: #b59870;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="icon">${isApprove ? "✨" : "🗑️"}</div>
        <h1>${statusText}</h1>
        <p>${messageText}</p>
        
        <div class="testimonial-box">
          "${item.text}"
          <br><br>
          <strong style="color: #bf953f; font-style: normal;">— ${item.name} (${item.title || "Client"})</strong>
        </div>

        <a href="https://aqrawi-project.vercel.app/services" class="btn">View Live Website</a>
      </div>
    </body>
    </html>`,
    { headers: { "Content-Type": "text/html" } }
  );
}
