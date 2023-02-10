"use client";

import { Poppins } from "@next/font/google";

import styles from "./AboutUs.module.css";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["400", "600"],
});

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
   return (
      <section className={styles.about_container} id="about">
         <div className={styles.about_info}>
            <h3 className={poppins.className}>About Us</h3>
            <p className={poppins.className}>
               I’m a leading Drilling Contractor in the San Francisco area. I provide my clients with a
               comprehensive approach to contracting and specialize in a wide range of services. Ever since
               starting out as a professional Drilling Contractor in 2000, I’ve prioritized serving my
               clients’ needs and satisfaction above everything else.
               <br /> <br />
               From dealing with mundane bureaucratic tasks to coordinating various contracting initiatives, I
               take care of all the small details so you don’t have to. Get in touch to bring your vision to
               life today!
            </p>
         </div>
         <div className={styles.about_image}></div>
      </section>
   );
};

export default AboutUs;
