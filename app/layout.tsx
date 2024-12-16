import type { Metadata } from "next";
import "./globals.css";

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
                className="font-kalame"
            >
                {children}
            </body>
        </html>
    );
}

