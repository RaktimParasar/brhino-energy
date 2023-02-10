import nodemailer from "nodemailer";

const email = process.env.NEXT_PUBLIC_NODEMAILER_EMAIL;
const key = process.env.NEXT_PUBLIC_NODEMAILER_KEY;

export const transporter = nodemailer.createTransport({
   host: "smtp.ethereal.email",
   port: 587,
   secure: false,
   service: "gmail",
   auth: {
      user: email,
      pass: key,
   },
});
