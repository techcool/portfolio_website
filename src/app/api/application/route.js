import nodemailer from "nodemailer";
import fs from "fs";

async function streamToBuffer(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on('data', (chunk) => {
      chunks.push(chunk);
    });
    readableStream.on('end', () => {
      resolve(Buffer.concat(chunks));
    });
    readableStream.on('error', reject);
  });
}

/**
 * Handles POST requests for the /api/collaborate route using native FormData.
 */
export async function POST(req) {
  try {
    // 1. Get FormData using the native Web API
    const data = await req.formData();

    // 2. Extract fields (no array normalization needed, they come as strings)
    const jobTitle = data.get("jobTitle");
    const question = data.get("question");
    const question2 = data.get("question2");
    const question3 = data.get("question3");
    const question5 = data.get("question5");
    const question6 = data.get("question6");
    const question7 = data.get("question7");
    const question8 = data.get("question8");
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const attachmentBlob = data.get("attachments");

    // 3. Handle Attachment: Convert Blob to Buffer for Nodemailer
    let attachment = null;
    if (attachmentBlob && attachmentBlob.size > 0) {
      // attachmentBlob is a File/Blob object from the FormData
      const buffer = Buffer.from(await attachmentBlob.arrayBuffer());
      
      attachment = {
        filename: attachmentBlob.name,
        content: buffer, // Use Buffer content directly
        contentType: attachmentBlob.type,
      };
    }

    // 4. Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // 5. Prepare mail options
    const mailOptions = {
      from: `"Website Application Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `Apply for: ${jobTitle || "Details Provided"}`,
      html: `
        <h3>Candidate Details</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <ul>
          <li style="margin-bottom:15px"><b>Why you decided to apply here and why should we select you?:</b><br/> ${question}</li>
          <li style="margin-bottom:15px"><b>Tell us about a project that you worked on and felt proud of it.:</b><br/> ${question2}</li>
          <li style="margin-bottom:15px"><b>Share your portfolios. (Behance, Dribbble, etc):</b><br/> ${question3}</li>
          <li style="margin-bottom:15px"><b>Do you have any other designs to show us?:</b><br/> ${question5}</li>
          <li style="margin-bottom:15px"><b>What are you looking for in your next job/journey?:</b><br/> ${question6}</li>
          <li style="margin-bottom:15px"><b>What makes you angry? and what makes you smile?:</b><br/> ${question7}</li>
          <li><b>Your current salary & what are your salary expectations?:</b><br/> ${question8}</li>
        </ul>
       
       
        ${attachment ? `<p>Candidate's CV: ${attachment.filename}</p>` : ''}
      `,
      attachments: attachment ? [attachment] : [],
    };

    // 6. Send email
    await transporter.sendMail(mailOptions);

    // 7. Return Web Standard Success Response
    return new Response(JSON.stringify({ success: true }), { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
    });
    
  } catch (error) {
    console.error("Error sending email:", error);
    // Return Web Standard Error Response
    return new Response(JSON.stringify({ error: "Failed to send email" }), { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
    });
  }
}