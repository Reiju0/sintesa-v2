import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { ToastContainer } from "react-toastify";
import { color } from "framer-motion";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <Providers
          themeProps={{ attribute: "class", defaultTheme: "purple-dark" }}>
          <div className="relative flex flex-col h-screen">
            <ToastContainer />
            <Navbar />
            {/* All content will parsing here. */}
            <main className="container flex-grow px-6 mx-auto max-w-7xl">
              {children}
            </main>
            <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-center w-full py-3 bg-background">
              <Link
                isExternal
                className="flex items-center gap-4 text-current"
                href="http://ditpa.kemenkeu.go.id"
                title="ditpa.kemenkeu.go.id">
                <span className="text-default-600">
                  Portal TKD <span className="text-xs">light version</span>
                </span>
                <p>
                  Part of: <span className="text-primary">Ditpa DJPb</span>
                </p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
