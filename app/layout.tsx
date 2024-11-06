"use client";
import { PrivyProvider } from "@privy-io/react-auth";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className}>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PrivyProvider
          appId="cm35p05c20a6p928n6dym5cpl"
          config={{
            appearance: {
              theme: "dark",
              accentColor: "#676FFF",
              logo: "/svg/lock-square-rounded.svg",
            },
            // Create embedded wallets for users who don't have a wallet
            embeddedWallets: {
              createOnLogin: "users-without-wallets",
            },
          }}
        >
          <Navbar />
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
}