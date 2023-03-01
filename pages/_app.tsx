import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";

import { baseURL } from "../app/utils/constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            <title>Brhino Energy Services</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

            {/* <!-- Primary Meta Tags --> */}
            <meta name="title" content="Brhino Energy Services" />
            <meta
               name="description"
               content="Looking for a professional to help you with your project? Look no further! Our website offers a wide range of professional services, including Coil Tubing, Rig Maintenance, and Manpower Services. We take pride in offering top-notch work at fair and competitive prices. With our extensive experience and expertise, we ensure that every detail of your project is discussed before beginning to give you an accurate quote. Contact us today for a free estimate, and to learn more about how we can help you with your next project."
            />
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#000000" />
            <link rel="canonical" href="https://brhinoenergy.com/" />
            <link rel="sitemap" type="application/xml" href="https://brhinoenergy.com/sitemap.xml" />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://brhinoenergy.com/" />
            <meta property="og:title" content="Brhino Energy Services" />
            <meta
               property="og:description"
               content="Looking for a professional to help you with your project? Look no further! Our website offers a wide range of professional services, including Coil Tubing, Rig Maintenance, and Manpower Services. We take pride in offering top-notch work at fair and competitive prices. With our extensive experience and expertise, we ensure that every detail of your project is discussed before beginning to give you an accurate quote. Contact us today for a free estimate, and to learn more about how we can help you with your next project."
            />
            <meta
               property="og:image"
               content={`${baseURL}/Brhino/tr:f-auto/brhino_logo_VrtaqRFRX.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1676203186866`}
            />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://brhinoenergy.com/" />
            <meta property="twitter:title" content="Brhino Energy Services" />
            <meta
               property="twitter:description"
               content="Looking for a professional to help you with your project? Look no further! Our website offers a wide range of professional services, including Coil Tubing, Rig Maintenance, and Manpower Services. We take pride in offering top-notch work at fair and competitive prices. With our extensive experience and expertise, we ensure that every detail of your project is discussed before beginning to give you an accurate quote. Contact us today for a free estimate, and to learn more about how we can help you with your next project."
            />
            <meta
               property="twitter:image"
               content={`${baseURL}/Brhino/tr:f-auto/brhino_logo_VrtaqRFRX.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1676203186866`}
            />
         </Head>
         <Component {...pageProps} />
      </>
   );
}
