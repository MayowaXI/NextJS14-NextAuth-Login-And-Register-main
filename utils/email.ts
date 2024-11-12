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

    const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify-email?token=${token}`;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verify your email",
      html: `<p>Please verify your email by clicking the link below:</p><a href="${verificationLink}">Verify Email</a>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully.");
  } catch (error) {
    console.error("Error sending verification email:", error);
    // Handle error appropriately
  }
};
