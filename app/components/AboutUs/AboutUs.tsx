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
               We are a leading provider of pan-India manpower services in the oil and gas industry. With a
               vast network of skilled professionals, we provide end-to-end recruitment solutions for our
               clients&apos; workforce needs, ensuring timely and cost-effective staffing solutions.
               <br />
               <br />
               Our expertise also extends to the operation and management of workover and drilling rigs,
               equipment rental, well stimulation services, and technical consultancy for the oil industry. We
               have a team of experienced professionals who leverage their industry knowledge and expertise to
               provide customized solutions that meet our clients&apos; specific requirements.
               <br />
               <br />
               At our core, we prioritize safety, quality, and timely delivery of our services. We take a
               client-centric approach, understanding their unique challenges and providing them with tailored
               solutions that drive value and maximize their return on investment. With a focus on excellence
               and continuous improvement, we strive to exceed our clients&apos; expectations and maintain our
               position as a leading service provider in the oil and gas industry.
            </p>
         </div>
         <div className={styles.about_image}></div>
      </section>
   );
};

export default AboutUs;
