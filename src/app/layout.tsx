import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EPCAS Logistique",
  description:
    "Plateforme pédagogique AFP & CFC Logisticien·ne — EPCA Sion. Théorie, exercices, blancs et suivi.",
  manifest: "/manifest.webmanifest",
  themeColor: "#2F6F5E",
  appleWebApp: {
    capable: true,
    title: "EPCAS",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${figtree.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-ink">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if("caches"in window){caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n.indexOf("epcas-")===0;}).map(function(n){return caches.delete(n);}));});}}catch(e){}})();`,
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
