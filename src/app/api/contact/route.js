import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { first_name, last_name, email, phone, subject, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Send to your own Gmail
      subject: `New Contact Form Submission: ${body.subject || "No subject"}`,
      text: `
        Name: ${body.first_name} ${body.last_name}
        Email: ${body.email}
        Phone: ${body.phone}
        Subject: ${body.subject}
        Message: ${body.message}
      `,
      html: `
        <h3>New Contact Request</h3>
        <p><b>Name:</b> ${body.first_name} ${body.last_name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Phone:</b> ${body.phone}</p>
        <p><b>Subject:</b> ${body.subject}</p>
        <p><b>Message:</b><br/>${body.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({success:true}), {status:200})
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
