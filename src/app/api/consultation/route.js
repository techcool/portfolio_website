import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { first_name, last_name, email, phone, date, time, message } = body;
    //console.log("GMAIL_USER:", process.env.GMAIL_USER ? "Loaded ✅" : "Missing ❌");
    //console.log("GMAIL_PASS:", process.env.GMAIL_PASS ? "Loaded ✅" : "Missing ❌");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
    const mailOptions = {
      from: `"Website Consultation Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Send to your own Gmail
      subject: `New Consultation Form Submission: ${body.subject || "Metting scheduled"}`,
      text: `
        Name: ${body.first_name} ${body.last_name}
        Email: ${body.email}
        Phone: ${body.phone}
        date: ${body.date}
        time: ${body.time}
        Message: ${body.message}
      `,
      html: `
        <h3>New Contact Request</h3>
        <p><b>Name:</b> ${body.first_name} ${body.last_name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Phone:</b> ${body.phone}</p>
        <p><b>Date:</b> ${body.date}</p>
        <p><b>Time:</b> ${body.time}</p>
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
