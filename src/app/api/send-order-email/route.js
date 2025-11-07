import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      message,
      delivery,
      paymentMethod,
      puppyName,
    } = await request.json();

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can change this to your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: "contact@mainecooncatery.com",
      subject: `New Irish Wolfhound Order - ${puppyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
            New Irish Wolfhound Order Received
          </h2>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #166534; margin-top: 0;">Order Details</h3>
            <p><strong>Puppy Name:</strong> ${puppyName}</p>
            <p><strong>Customer Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phoneNumber}</p>
            <p><strong>Payment Method:</strong> ${paymentMethod}</p>
            <p><strong>Delivery Option:</strong> ${delivery}</p>
            ${
              delivery === "Yes"
                ? `<p><strong>Delivery Address:</strong> ${address}</p>`
                : ""
            }
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
          </div>
          
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #92400e;">
              <strong>Next Steps:</strong> Please contact the customer at ${email} to proceed with payment and delivery arrangements for their Irish Wolfhound puppy.
            </p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px;">
            This order was submitted through Tariq's Irish Wolfhound Puppies website.
          </p>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Order email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send order email" },
      { status: 500 }
    );
  }
}
