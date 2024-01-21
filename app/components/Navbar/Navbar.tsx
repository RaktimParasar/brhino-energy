"use client";

import { NextFont } from "@next/font/dist/types";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { Modal } from "antd";

import { Menu } from "@components/Icons/Icons";
import { baseURL } from "../../utils/constants";

import styles from "./Navbar.module.css";

interface NavbarProps {
   poppins: NextFont;
}

const Navbar: React.FC<NavbarProps> = ({ poppins }) => {
   const [open, setOpen] = useState(false);

   const showMenu = () => {
      setOpen(true);
   };

   const onClose = () => {
      setOpen((open) => !open);
   };

   const handleMenuScroll = (item: string) => {
      const goToItem = document.getElementById(item);
      goToItem?.scrollIntoView({ behavior: "smooth" });
   };

   const handleMenuScrollMobile = (item: string) => {
      onClose && onClose();
      const goToItem = document.getElementById(item);
      goToItem?.scrollIntoView({ behavior: "smooth" });
   };

   return (
      <>
         <nav className={styles.navbar}>
            <div className={styles["menu-container"]}>
               <div className={styles.logo_container}>
                  <Link href="/" passHref style={{ textDecoration: "none" }}>
                     <Image
                        src={`${baseURL}/Brhino/tr:f-auto/brhino_logo_VrtaqRFRX.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1676203186866`}
                        alt="Brhino Energy Services Logo"
                        priority
                        width={80}
                        height={80}
                     />
                  </Link>
               </div>
               <ul className={poppins.className}>
                  <li onClick={() => handleMenuScroll("services")}>Services</li>
                  <li onClick={() => handleMenuScroll("projects")}>Projects</li>
                  <li onClick={() => handleMenuScroll("about")}>About</li>
                  <li onClick={() => handleMenuScroll("contact")}>Contact</li>
                  {/* <li onClick={() => handleMenuScroll("careers")}>Careers</li> */}
               </ul>
               <button className={styles.menu_btn} onClick={showMenu}>
                  <Menu color={"var(--secondary-indigo)"} />
               </button>
            </div>
         </nav>
         <Modal
            title="Menu"
            centered
            open={open}
            footer={null}
            onCancel={() => onClose()}
            bodyStyle={{ height: "300px" }}
            width={300}
         >
            <div className={styles.mobile_menu}>
               <ul className={poppins.className}>
                  <li onClick={() => handleMenuScrollMobile("services")}>Services</li>
                  <li onClick={() => handleMenuScrollMobile("projects")}>Projects</li>
                  <li onClick={() => handleMenuScrollMobile("about")}>About</li>
                  <li onClick={() => handleMenuScrollMobile("contact")}>Contact</li>
                  {/* <li onClick={() => handleMenuScrollMobile("careers")}>Careers</li> */}
               </ul>
            </div>
         </Modal>
      </>
   );
};

export default Navbar;
