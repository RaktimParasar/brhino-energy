import React from "react";
import { transporter } from "../../app/utils/nodemailer";

import { render } from "@react-email/render";

import Email from "@components/Email/Email";

// @dev react-email logic using nodemailer

const handler = async (req, res) => {
   if (req.method === "POST") {
      const { firstName, lastName, email, phone, comment } = req.body;
      if (!firstName || !lastName || !email || !comment || !phone) {
         return res.status(400).send({ message: "Bad request" });
      } else {
         const emailHtml = render(
            <Email firstName={firstName} lastName={lastName} email={email} phone={phone} comment={comment} />
         );
         const mailOptions = {
            from: "raktimparasar96@gmail.com",
            to: "brhinoenergy@yahoo.com",
            subject: "BRhino Services",
            html: emailHtml,
         };
         try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ success: true });
         } catch (err) {
            console.log(err);
            return res.status(400).json({ message: err.message });
         }
      }
   }
   return res.status(400).json({ message: "Bad request" });
};
export default handler;
