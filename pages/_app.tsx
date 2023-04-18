import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

import { baseURL } from "../app/utils/constants";

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
               content="Brhino Energy Services offers professional Coil Tubing, Rig Maintenance, and Manpower Services. We provide top-notch work at fair and competitive prices. Contact us today for a free estimate and learn more about how we can help you with your next project."
            />
            <meta
               name="keywords"
               content="Brhino Energy, Brhino Energy Services, Coil Tubing, Rig Maintenance, Manpower Services, Professional services, Top-notch work, Fair prices, Competitive prices, Free estimate, Project services"
            />
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#000000" />
            <link rel="canonical" href="https://brhinoenergy.com/" />
            <link rel="sitemap" type="application/xml" href="https://brhinoenergy.com/sitemap.xml" />
            <meta name="google-site-verification" content="oRYxBe3LWZU03MEE4EeGMHSSZUekNWS9kRp3-zjmUWg" />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://brhinoenergy.com/" />
            <meta property="og:title" content="Brhino Energy Services" />
            <meta
               property="og:description"
               content="Brhino Energy Services offers professional Coil Tubing, Rig Maintenance, and Manpower Services. We provide top-notch work at fair and competitive prices. Contact us today for a free estimate and learn more about how we can help you with your next project."
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
               content="Brhino Energy Services offers professional Coil Tubing, Rig Maintenance, and Manpower Services. We provide top-notch work at fair and competitive prices. Contact us today for a free estimate and learn more about how we can help you with your next project."
            />
            <meta
               property="twitter:image"
               content={`${baseURL}/Brhino/tr:f-auto/brhino_logo_VrtaqRFRX.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1676203186866`}
            />
         </Head>
         <Component {...pageProps} />
         <Analytics />
      </>
   );
}
