"use client";

import { useState } from "react";
import { Poppins } from "@next/font/google";

import { Tooltip } from "antd";

import { Address, Email, Phone, Copy } from "@components/Icons/Icons";

import styles from "./ContactUs.module.css";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["400", "600"],
});

interface ContactUsProps {}

const ContactUs: React.FC<ContactUsProps> = () => {
   const [copied, setCopied] = useState(false);

   const copyToClipboard = (textToCopy: string) => {
      setCopied(true);
      navigator.clipboard.writeText(textToCopy).then(() => {
         setTimeout(() => setCopied(false), 3000);
      });
   };

   const mailTo = (email: string) => (window.location.href = `mailto:${email}`);

   return (
      <section className={styles.contact_container} id="contact">
         <div className={styles.contact_info}>
            <h3 className={poppins.className}>Contact Us</h3>
            <p className={poppins.className}>
               <Address color={"var(--primary-white)"} /> 55, Highway Mall, Chandkheda, Ahmedabad,
               Gujarat-382424
            </p>
            <p className={poppins.className}>
               <Email color={"var(--primary-white)"} /> brhinoenergy@yahoo.com{" "}
               <Tooltip
                  title={copied ? "Email copied 👍🏻" : "Copy to clipboard"}
                  color={copied ? "#16A34A" : "var(--secondary-indigo)"}
                  placement="rightTop"
                  overlayInnerStyle={{ color: "var(--primary-white)", fontFamily: "inherit" }}
               >
                  <span
                     className={styles.copy_icon}
                     onClick={() => copyToClipboard("brhinoenergy@yahoo.com")}
                  >
                     <Copy color={"var(--primary-white)"} />
                  </span>
               </Tooltip>
            </p>
            <p className={poppins.className}>
               <Phone color={"var(--primary-white)"} /> +91-8638621558
            </p>
            <button className={poppins.className} onClick={() => mailTo("brhinoenergy@yahoo.com")}>
               <Email color={"var(--primary-white)"} /> Send Email
            </button>
         </div>
         <div className={styles.contact_image}></div>
      </section>
   );
};

export default ContactUs;
