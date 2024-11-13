import nodemailer from "nodemailer";

export const sendVerificationEmail = async (email: string, token: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASSWORD,
      },
      tls: {
        ciphers: "SSLv3",
      },
    });

    const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify-email?token=${encodeURIComponent(token)}`;

    // Define the HTML template as a string
    const emailTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify Your Email</title>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f4f4f7; color: #333333; margin: 0; padding: 0; }
          .email-container { width: 100%; padding: 20px; box-sizing: border-box; }
          .email-content { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
          .email-header { text-align: center; padding: 20px 0; font-size: 24px; color: #4A90E2; }
          .email-body { font-size: 16px; line-height: 1.5; padding: 20px; color: #333333; }
          .email-body p { margin: 0 0 16px; }
          .button { display: inline-block; padding: 12px 24px; margin: 20px 0; font-size: 16px; font-weight: bold; color: #ffffff; background-color: #4A90E2; border-radius: 6px; text-decoration: none; text-align: center; }
          .email-footer { font-size: 12px; text-align: center; color: #777777; padding: 20px; }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-content">
            <div class="email-header">
              Verify Your Email Address
            </div>
            <div class="email-body">
              <p>Hi there,</p>
              <p>Thank you for signing up! Please verify your email address to complete your registration and activate your account.</p>
              <p>Click the button below to verify your email:</p>
              <a href="${verificationLink}" class="button">Verify Email</a>
              <p>If the button above doesn’t work, copy and paste the following link into your browser:</p>
              <p>${verificationLink}</p>
            </div>
            <div class="email-footer">
              If you didn’t request this email, please ignore it.
              <br>© ${new Date().getFullYear()} Your Company. All rights reserved.
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verify your email",
      html: emailTemplate,
    };

    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully.");
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};
