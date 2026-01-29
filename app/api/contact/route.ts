import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "mail.arssupply.co.uk",
      port: 587,
      secure: false,
      auth: {
        user: "sales@arssupply.co.uk",
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: "sales@arssupply.co.uk",
      to: "sales@arssupply.co.uk",
      subject: "New Website Enquiry",
      text: `
New enquiry from website:

Name: ${name}
Email: ${email}

Message:
${message}
`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
