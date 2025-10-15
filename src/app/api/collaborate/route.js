import nodemailer from "nodemailer";
import fs from "fs";
// No need for formidable, fs is only for cleaning up if you use temporary files, 
// but we'll use Buffers directly, so you can often remove fs too. 
// We'll keep the logic using the file content (Buffer) directly.

// IMPORTANT: No 'export const config' is needed when using native req.formData()
// and not a custom middleware/parser.

/**
 * Converts a Web Stream/Blob to a Node.js Buffer.
 * This is necessary for Nodemailer to handle file attachments directly from the stream.
 */
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
    const first_name = data.get("first_name");
    const last_name = data.get("last_name");
    const email = data.get("email");
    const phone = data.get("phone");
    const company = data.get("company");
    const services = data.get("services");
    const requirement = data.get("requirement");
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
      from: `"Website Collaboration Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Collaboration Form Submission: ${company || "Details Provided"}`,
      html: `
        <h3>Collaboration Request From</h3>
        <p><b>Name:</b> ${first_name} ${last_name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Services:</b> ${services}</p>
        <p><b>Requirements:</b><br/>${requirement}</p>
        ${attachment ? `<p>Attached File: ${attachment.filename}</p>` : ''}
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