"use client";

import Image from "next/image";
import Link from "next/link";

import brhinoLogo from "../../../public/images/brhino_logo.jpeg";

import styles from "./Navbar.module.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
   const handleMenuScroll = (item: string) => {
      const goToItem = document.getElementById(item);
      goToItem?.scrollIntoView({ behavior: "smooth" });
   };

   return (
      <>
         <nav className={styles.navbar}>
            <div className={styles["menu-container"]}>
               <ul>
                  <li onClick={() => handleMenuScroll("services")}>Services</li>
                  <li onClick={() => handleMenuScroll("projects")}>Projects</li>
                  <div className={styles.logo_container}>
                     <Link href="/" passHref style={{ textDecoration: "none" }}>
                        <Image
                           src={brhinoLogo}
                           alt="Brhino Energy Services"
                           priority
                           width={120}
                           height={120}
                        />
                     </Link>
                  </div>
                  <li onClick={() => handleMenuScroll("about")}>About</li>
                  <li onClick={() => handleMenuScroll("contact")}>Contact</li>
               </ul>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
