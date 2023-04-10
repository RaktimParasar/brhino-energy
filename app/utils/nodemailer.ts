import nodemailer from "nodemailer";

const adminEmail = process.env.NEXT_PUBLIC_NODEMAILER_ADMIN_EMAIL;
const key = process.env.NEXT_PUBLIC_NODEMAILER_KEY;

export const transporter = nodemailer.createTransport({
   host: "smtp.office365.com",
   port: 587,
   secure: false,
   service: "office365",
   auth: {
      user: adminEmail,
      pass: key,
   },
   debug: true,
   logger: true,
});
