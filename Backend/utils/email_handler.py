import smtplib
import random
import string
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import os

load_dotenv()

GMAIL_USER = os.getenv("GMAIL_USER")
GMAIL_APP_PASSWORD = os.getenv("GMAIL_APP_PASSWORD")


def generate_otp() -> str:
    return "".join(random.choices(string.digits, k=6))


def send_otp_email(to_email: str, otp: str) -> bool:
    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = "Station Hub - Password Reset OTP"
        msg["From"] = GMAIL_USER
        msg["To"] = to_email

        html = f"""
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
            <div style="max-width: 400px; margin: auto; background: white; border-radius: 10px; padding: 30px;">
              <h2 style="color: #2c3e50;">Station Hub</h2>
              <p style="color: #555;">Use the OTP below to reset your password. It expires in <strong>10 minutes</strong>.</p>
              <div style="font-size: 36px; font-weight: bold; letter-spacing: 10px; color: #e74c3c; text-align: center; padding: 20px;">
                {otp}
              </div>
              <p style="color: #999; font-size: 12px;">If you did not request this, ignore this email.</p>
            </div>
          </body>
        </html>
        """

        msg.attach(MIMEText(html, "html"))

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(GMAIL_USER, GMAIL_APP_PASSWORD)
            server.sendmail(GMAIL_USER, to_email, msg.as_string())

        return True
    except Exception as e:
        print(f"Email error: {e}")
        return False
