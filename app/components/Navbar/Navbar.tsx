"use client";

import Image from "next/image";
import Link from "next/link";

import brhinoLogo from "../../../public/images/brhino_logo.jpeg";

import styles from "./Navbar.module.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
   return (
      <>
         <nav className={styles.navbar}>
            <div className={styles["menu-container"]}>
               <ul>
                  <li>Services</li>
                  <li>Projects</li>
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
                  <li>About</li>
                  <li>Contact</li>
               </ul>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
