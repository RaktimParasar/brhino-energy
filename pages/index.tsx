import type { NextPage } from "next";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Inter, Poppins } from "@next/font/google";

import { Suspense } from "react";

import Navbar from "@components/Navbar/Navbar";
import { Linkedin } from "@components/Icons/Icons";
import { CARD_CONTENTS, CLIENTS, TEAM } from "../app/utils/constants";

import { baseURL } from "../app/utils/constants";

import styles from "../styles/Home.module.css";

const Clients = dynamic(() => import("@components/Clients/Clients"), { ssr: true });
const AboutUs = dynamic(() => import("@components/AboutUs/AboutUs"), { ssr: true });
const UploadCV = dynamic(() => import("@components/UploadCV/UploadCV"), { ssr: true });
const Projects = dynamic(() => import("@components/Projects/Projects"), { ssr: true });
const QuoteForm = dynamic(() => import("@components/QuoteForm/QuoteForm"), { ssr: true });
const ContactUs = dynamic(() => import("@components/ContactUs/ContactUs"), { ssr: true });
const ServicesCard = dynamic(() => import("@components/ServicesCard/ServicesCard"), { ssr: true });

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["400", "600"],
});

const Home: NextPage = () => {
   const renderServicesCards = () => {
      return (
         <Suspense fallback={`Loading...`}>
            {CARD_CONTENTS.map(({ imageSrc, title, description }, index) => (
               <ServicesCard
                  key={`${imageSrc}-${index}`}
                  imageSrc={imageSrc}
                  title={title}
                  description={description}
               />
            ))}
         </Suspense>
      );
   };

   return (
      <>
         <main className={inter.className}>
            <section className={styles.background_video_container}>
               <video
                  className={styles.background_video}
                  src={`${baseURL}/Brhino/brhino-bg_7NyDt0JG7.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1676959453506`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
               />
               <Navbar poppins={poppins} />
               <div className={styles.header}>
                  <h1>
                     BRHINO <br />
                     ENERGY SERVICES
                  </h1>
                  <h3>FOR ALL YOUR NEEDS</h3>
               </div>
               <div className={styles.arrow}>
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
            </section>
            <section className={styles.services_container} id="services">
               <div className={styles.services_wrapper}>
                  <h3>Professional Services</h3>
                  <p>
                     Looking for a professional to help you with your project? Look no further! Our website
                     offers a wide range of professional services, including Coil Tubing, Rig Maintenance, and
                     Manpower Services. We take pride in offering top-notch work at fair and competitive
                     prices. With our extensive experience and expertise, we ensure that every detail of your
                     project is discussed before beginning to give you an accurate quote. Contact us today for
                     a free estimate and to learn more about how we can help you with your next project.
                  </p>
                  <div className={styles.services_cards_container}>{renderServicesCards()}</div>
               </div>
            </section>
            <Projects />
            <section className={styles.clients_container}>
               <div className={styles.services_wrapper}>
                  <h3>Our Trusted Clients</h3>
                  <p>
                     Our long-standing relationships with these trusted clients are a testament to our
                     commitment to delivering quality and reliable services that meet their expectations. We
                     take pride in the trust they have placed in us, and we continue to work hard to maintain
                     their satisfaction and loyalty.
                  </p>
                  <Clients clientData={CLIENTS} />
               </div>
            </section>
            <AboutUs />
            <section className={styles.clients_container}>
               <div className={styles.services_wrapper}>
                  <h3>Meet our Team</h3>
                  <p>
                     Our team is a diverse group of professionals with unique skills and expertise. Together
                     we work towards a common goal and strive for excellence in all we do. Get to know the
                     brilliant minds behind our success, the talented individuals who bring our vision to
                     life, and the passionate people who make up the heart of our organization. Join us as we
                     introduce you to the dedicated individuals who drive our success and make it all
                     possible.
                  </p>
                  <div className={styles.team_container}>
                     {TEAM.map(({ name, designation, imageSrc }, index) => (
                        <div className={styles.team_card} key={`${index}-${imageSrc}`}>
                           <Image
                              src={imageSrc}
                              className={styles.team_image}
                              alt={name}
                              width={100}
                              height={100}
                              priority
                           />
                           <div className={styles.team_contents}>
                              <h3 className={poppins.className}>{name}</h3>
                              <p>{designation}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>
            <ContactUs />
            <section className={styles.form_container}>
               <div className={styles.services_wrapper}>
                  <h3>Get a quote</h3>
                  <p>
                     Get a personalized quote for your project by providing us with some basic information.
                     Our team is ready to help bring your vision to life. We provide tailored quotes that meet
                     your requirements and budget. Contact us today to get started and let us prioritize your
                     satisfaction.
                  </p>
                  <QuoteForm />
               </div>
            </section>
            <section className={styles.careers_container} id="careers">
               <div className={styles.services_wrapper}>
                  <h3>Brhino Careers</h3>
                  <p>
                     The careers section provides a platform for you to upload your CV to our database,
                     increasing your visibility to potential employers for future job opportunities. Take
                     advantage of this opportunity to showcase your skills and experience to potential
                     employers and take the first step towards advancing your career.
                  </p>
                  <UploadCV />
               </div>
            </section>
            <footer className={styles.footer_container}>
               <div className={styles.socials}>
                  <Link
                     href="https://www.linkedin.com/company/brhino-energy-services/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Linkedin color={"var(--primary-white)"} />
                  </Link>
               </div>
               <div className={styles.copyright_info}>
                  <span className={styles.copyright}>&copy;</span> 2023 All Rights Reserved by Brhino Energy
                  Services
               </div>
            </footer>
         </main>
      </>
   );
};

export default Home;
