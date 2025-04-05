import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/provider";

 const fontFamily = Poppins({
  weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets:["latin"]
 })

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Landing page using nextjs 15 and tailwindcss 4.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontFamily.className} antialiased`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
