"use client";

import { Poppins } from "@next/font/google";

import styles from "./Projects.module.css";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["400", "600"],
});

const Projects: React.FC = (): JSX.Element => {
   return (
      <section className={styles.projects_container} id="projects">
         <div className={styles.projects_info}>
            <h3 className={poppins.className}>Ongoing Projects</h3>
            <p className={poppins.className}>
               We are currently engaged in several projects in the oil and gas industry. Under South Asia
               Consultancy, we are managing the operation and maintenance of three workover rigs in Assam and
               one in Gujarat. Additionally, we are overseeing the operation and maintenance of two drilling
               rigs and two workover rigs in Gujarat under North Eastern Drilling and Workover Service Co.
               Pvt. Ltd.
               <br />
               <br />
               Furthermore, we are providing operation and maintenance services for one workover rig under
               Western Oil Field in Gujarat. These projects are a testament to our expertise and capabilities
               in providing comprehensive services that meet our clients&apos; specific requirements.
               <br />
               <br />
               Our focus on safety, quality, and timely delivery enables us to deliver these projects
               efficiently and effectively, while minimizing any disruptions to our clients&apos; operations.
               We take pride in our ability to build strong, long-lasting relationships with our clients, and
               we are committed to delivering exceptional value and quality in all of our projects.
            </p>
         </div>
         <div className={styles.projects_image}></div>
      </section>
   );
};

export default Projects;
