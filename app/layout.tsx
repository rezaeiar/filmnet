import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/modules/Footer/Footer";
import MiniFooter from "./components/modules/MiniFooter/MiniFooter";
import Header from "./components/templates/Home/Header/Header";
import { Navbar } from "./components/modules/Navbar/Navbar";

export const metadata: Metadata = {
    title: "فیلم نت | تماشای آنلاین فیلم و سریال",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
            <body
                className="font-kalame bg-stone-900"
            >
                <Navbar />
                <Header />
                {children}
                <Footer />
                <MiniFooter />
            </body>
        </html>
    );
}

