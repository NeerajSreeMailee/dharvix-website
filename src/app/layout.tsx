import type React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata = {
  title: "Dharvix",
  description:
    "We help businesses grow and succeed with our comprehensive suite of professional services. From strategic planning to execution, we're your partner in business excellence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#0a2342] via-[#193b6a] to-[#1e2a78] text-blue-100 min-h-screen">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
