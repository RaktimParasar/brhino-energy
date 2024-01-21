// import { transporter } from "../../app/utils/nodemailer";

// const adminEmail = process.env.NEXT_PUBLIC_NODEMAILER_ADMIN_EMAIL;
// const infoEmail = process.env.NEXT_PUBLIC_NODEMAILER_INFO_EMAIL;

// const htmlTemplate = `
// <html>
//       <body>
//         <p>Dear Hiring Manager,</p>
//         <p>I am writing to express my interest in potential employment opportunities at Brhino Energy.</p>
//         <p>Please find  my updated resume attached below.</p>
//         <br>
//         <p>Thank you for your time and consideration. I look forward to hearing back from you.</p>
//         <hr>
//       </body>
//     </html>
// `;

// const handler = async (req, res) => {
//    if (req.method === "POST") {
//       const { buffer, fileName, fileType } = req.body;
//       if (!req.body) {
//          return res.status(400).send({ message: "Bad request" });
//       } else {
//          const mailOptions = {
//             from: adminEmail,
//             to: infoEmail,
//             subject: "Resume for Employment Opportunities at Brhino Energy.",
//             html: htmlTemplate,
//             attachments: [
//                {
//                   filename: fileName,
//                   content: Buffer.from(buffer, "base64"),
//                   encoding: "base64",
//                   contentType: fileType,
//                },
//             ],
//          };
//          try {
//             await transporter.sendMail(mailOptions);
//             return res.status(200).json({ success: true });
//          } catch (err) {
//             console.log(err);
//             return res.status(400).json({ message: err.message });
//          }
//       }
//    }
//    return res.status(400).json({ message: "Bad request" });
// };

// export default handler;
