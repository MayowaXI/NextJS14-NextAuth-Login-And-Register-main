import nodemailer from "nodemailer";

// Create a reusable transporter
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

// Utility to send the verification email
export const sendVerificationEmail = async (email: string, firstName: string, token: string ) => {
  try {
    const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify-email?token=${encodeURIComponent(token)}`;
    const year = new Date().getFullYear();

    const emailTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Verify Your Email</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f7;
                  color: #333333;
                  margin: 0;
                  padding: 0;
              }
              .email-container {
                  width: 100%;
                  padding: 20px;
                  box-sizing: border-box;
              }
              .email-content {
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }
              .email-header {
                  text-align: center;
                  padding: 20px 0;
                  font-size: 24px;
                  color: #4A90E2;
              }
              .email-body {
                  font-size: 16px;
                  line-height: 1.5;
                  padding: 20px;
                  color: #333333;
              }
              .email-body p {
                  margin: 0 0 16px;
              }
              .button {
                  display: inline-block;
                  padding: 12px 24px;
                  margin: 20px 0;
                  font-size: 16px;
                  font-weight: bold;
                  color: #ffffff;
                  background-color: #4A90E2;
                  border-radius: 6px;
                  text-decoration: none;
                  text-align: center;
              }
              .email-footer {
                  font-size: 12px;
                  text-align: center;
                  color: #777777;
                  padding: 20px;
              }
          </style>
      </head>
      <body>
          <div class="email-container">
              <div class="email-content">
                  <div class="email-header">
                      Verify Your Email Address
                  </div>
                  <div class="email-body">
                      <p>Hi ${firstName},</p>
                      <p>Thank you for signing up! Please verify your email address to complete your registration and activate your account.</p>
                      <p>Click the button below to verify your email:</p>
                      <a href="${verificationLink}" class="button">Verify Email</a>
                      <p>If the button above doesn’t work, copy and paste the following link into your browser:</p>
                      <p>${verificationLink}</p>
                  </div>
                  <div class="email-footer">
                      If you didn’t request this email, please ignore it.
                      <br>© ${year}  All rights reserved.
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

// Utility to send the welcome email
export const sendWelcomeEmail = async (email :string, firstName: string) => {
  try {
    const year = new Date().getFullYear();

    const emailTemplate = `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Aboard, ${firstName}!</title>
    <style>
        body {
            font-family: Helvetica, Arial, sans-serif;
            background-color: #e6f7ff;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .container {
            max-width: 700px;
            background-color: #fff;
            margin: 40px auto;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #0073e6;
            font-size: 28px;
            margin-bottom: 20px;
        }
        h2 {
            font-size: 20px;
            color: #005bb5;
            margin-bottom: 15px;
        }
        p {
            line-height: 1.6;
            margin-bottom: 15px;
        }
        .button {
            background-color: #0073e6;
            color: #fff;
            padding: 12px 25px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
            margin: 20px 0;
        }
        .footer {
            background-color: #f2f2f2;
            color: #666;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            margin-top: 40px;
        }
        a {
            color: #0073e6;
            text-decoration: none;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Welcome to Beta Travel, ${firstName}!</h1>
    <p>We're excited to have you join our community of passionate travelers. Your email has been successfully verified, and your account is now active.</p>
    <p>At Beta Travel, we strive to make your travel planning seamless and enjoyable. Explore new destinations, discover exclusive deals, and share your experiences with fellow travelers.</p>
    

    <h2>Need Assistance?</h2>
    <p>Our support team is here to help you with any questions or concerns you may have.</p>
    

    <h2>Stay Connected</h2>
    <p>Follow us on social media to get the latest updates and travel inspiration:</p>
    <p>
        <a href="https://facebook.com/betatravel">Facebook</a> | 
        <a href="https://instagram.com/betatravel">Instagram</a> | 
        <a href="https://twitter.com/betatravel">Twitter</a>
    </p>

    <div class="footer">
        <p>Beta Travel respects your privacy. Read our <a href="https://yourdomain.com/privacy-policy">Privacy Policy</a>.</p>
        <p>If you received this email by mistake, please <a href="mailto:support@betatravel.com">let us know</a>.</p>
        <p>&copy; ${year} Beta Travel. All rights reserved.</p>
    </div>
</div>

</body>
</html>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome",
      html: emailTemplate,
    };

    await transporter.sendMail(mailOptions);
    console.log("Welcome email sent successfully.");
  } catch (error) {
    console.error("Error sending welcome email:", error);
  }
};
