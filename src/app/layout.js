import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WatuTech - Trainer Elektronik & Digital Berkualitas | Tugas Akhir & Training",
  description: "Solusi terpercaya untuk trainer elektronik custom, software trainer, dan pelatihan teknis. Kami melayani mahasiswa teknik dan perusahaan dengan kualitas terbaik dan harga terjangkau.",
  keywords: ["trainer elektronik", "tugas akhir", "training pelatihan", "robotika", "IoT", "PLC", "SCADA", "embedded system"],
  authors: [{ name: "WatuTech" }],
  creator: "WatuTech",
  metadataBase: new URL("https://watutech.com"),
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://watutech.com",
    siteName: "WatuTech",
    title: "WatuTech - Trainer Elektronik & Digital Berkualitas",
    description: "Solusi terpercaya untuk trainer elektronik custom dan training pelatihan teknis.",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "WatuTech Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WatuTech - Trainer Elektronik & Digital",
    description: "Solusi trainer elektronik dan training untuk mahasiswa & perusahaan",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  alternates: {
    canonical: "https://watutech.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
