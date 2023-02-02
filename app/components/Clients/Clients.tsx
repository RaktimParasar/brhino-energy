"use client";

import Image from "next/image";

import { Poppins } from "@next/font/google";

import styles from "./Clients.module.css";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["400", "600"],
});

interface ClientsProps {
   clientData: any[];
}

const Clients: React.FC<ClientsProps> = ({ clientData }) => {
   return (
      <div className={styles.clients_grid}>
         {clientData.map(({ logo, title }, index) => (
            <div key={`${logo}-${index}`} className={styles.clients_card}>
               <div className={styles.image_wrapper}>
                  <Image src={logo} alt={title} priority width={100} height={100} />
               </div>
               <h3 className={poppins.className}>{title}</h3>
            </div>
         ))}
      </div>
   );
};

export default Clients;
