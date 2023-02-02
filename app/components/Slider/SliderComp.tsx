"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";

import { Poppins } from "@next/font/google";

import styles from "./SliderComp.module.css";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["400", "600"],
});

interface SliderProps {
   content: any;
}

const SliderComp: React.FC<SliderProps> = ({ content }) => {
   const sliderRef = useRef<any>();

   const settings = {
      dots: true,
      customPaging: () => <div className={styles["paging"]}></div>,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      accessibility: true,
      speed: 800,
      dotsClass: "slick-dots",
      className: "slider-tabs",
   };

   const renderItems = (): JSX.Element[] =>
      content.map((item: any, index: number) => (
         <div key={`${index}-${item.imageSrc}`} className={styles.content_wrapper}>
            <Image src={item.imageSrc} alt={item.title} width={350} height={350} />
            <div className={styles.content_details}>
               <h3 className={poppins.className}>{item.title}</h3>
               <p className={poppins.className}> {item.description}</p>
            </div>
         </div>
      ));

   return (
      <>
         <div className={styles.container}>
            <Slider {...settings} ref={sliderRef}>
               {renderItems()}
            </Slider>
         </div>
      </>
   );
};

export default SliderComp;
