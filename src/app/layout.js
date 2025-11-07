import { Outfit } from "next/font/google";
import "./globals.css";
import { ShipmentProvider } from "@/contexts/ShipmentContext";
import { AuthProvider } from "@/contexts/AuthContext";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata = {
  title: "Tariq's Irish Wolfhound Puppies",
  description:
    "Discover Tariq's Irish Wolfhound puppies — well-socialized, health-guaranteed companions from a trusted breeder providing lifelong support.",
  keywords:
    "Irish Wolfhound, Irish Wolfhound puppies, Irish Wolfhound for sale, buy Irish Wolfhound puppy, Irish Wolfhound breeder, Irish Wolfhound adoption, gentle giants",
  openGraph: {
    title: "Tariq's Irish Wolfhound Puppies",
    description:
      "Meet our Irish Wolfhound puppies. Healthy, affectionate, and raised with care by Tariq's Irish Wolfhound Puppies.",
    type: "website",
    locale: "en_US",
    url: "https://tariqsirishwolfhounds.com",
    siteName: "Tariq's Irish Wolfhound Puppies",
    images: [
      {
        url: "/cover_tk.jpg",
        width: 1200,
        height: 630,
        alt: "Irish Wolfhound puppies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tariq's Irish Wolfhound Puppies",
    description:
      "Meet our Irish Wolfhound puppies raised with love, health checks, and lifelong support.",
    images: ["/cover_tk.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/irishlogo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/irishlogo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/irishlogo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#059669", // Emerald-600 color
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link rel="icon" href="/irishlogo.png" type="image/png" />
        {/* Google tag (gtag.js) */}

        {/* Tawk.to Live Chat Script */}
        {/* <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68c551414a173719262aaa9b/1j51car05';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        /> */}

        {/* Theme color meta tag for mobile browsers */}
        <meta name="theme-color" content="#059669" />

        {/* Additional SEO metadata */}
        <meta name="author" content="Tariq's Irish Wolfhound Puppies" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Preload critical assets */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={outfit.className}>
        <AuthProvider>
          <ShipmentProvider>{children}</ShipmentProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
