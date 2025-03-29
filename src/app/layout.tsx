import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./bootstrap.min.css";
import "./style.css";
import "./style-responsive.css";
import "./vertical-rhythm.min.css";
import "./magnific-popup.css";
import "./owl.carousel.css";
import "./splitting.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import AosConfig from "@/components/AosConfig";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Corporate Affairs Commission",
  description: "Nigerian Corporate Registry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

//   const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
// );
  return (
    <html lang="en">
      <head>
        {/* Add all your scripts here */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.ajaxchimp.min.js" strategy="beforeInteractive" />
        <Script src="/js/all.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins.js" strategy="afterInteractive" />
        <Script src="/js/contact-form.js" strategy="afterInteractive" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} appear-animate antialiased max-w-[1500px] mx-auto `}
      >
        {/* <AosConfig> */}
         <>
         <div className="page-loader">
            <div className="loader">Loading...</div>
        </div>

        <a href="#main" className="btn skip-to-content">Skip to Content</a>
        <div  id="top" className="flex page flex-col">
          <Header />
            <main id="main">
            {children}
            </main>
          <Footer />
        </div>
         </>
        {/* </AosConfig> */}
      </body>
    </html>
  );
}
