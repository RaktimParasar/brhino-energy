import { transporter } from "../../app/utils/nodemailer";

const adminEmail = process.env.NEXT_PUBLIC_NODEMAILER_ADMIN_EMAIL;

const handler = async (req, res) => {
   if (req.method === "POST") {
      if (!req.body) {
         return res.status(400).send({ message: "Bad request" });
      } else {
         const mailOptions = {
            from: adminEmail,
            to: "raktimparasar96@gmail.com",
            subject: "BRhino Energy",
            text: "Body of the email",
            subject: "Your's subject",
            attachments: [
               {
                  filename: "Resume.pdf",
                  content: Buffer.from(req.body.buffer, "base64"),
                  encoding: "base64",
               },
            ],
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
