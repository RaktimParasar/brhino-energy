"use client";

import Image from "next/image";

import { Poppins } from "@next/font/google";

import styles from "./ServicesCard.module.css";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["400", "600"],
});

interface CardProps {
   imageSrc: string;
   title: string;
   description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
   return (
      <div className={styles.card}>
         <div className={styles.img_container}>
            <Image src={imageSrc} alt={title} width={400} height={250} priority />
         </div>
         <div className={styles.card_info}>
            <h3 className={poppins.className}>{title}</h3>
            <p className={poppins.className}>{description}</p>
         </div>
      </div>
   );
};

export default Card;
