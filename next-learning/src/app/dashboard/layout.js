import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Ini halaman dashboard",
};

const DashboardLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <div className="w-screen h-screen bg-teal-200">
            <div className="bg-blue-200">{children}</div>
          </div>
        </body>
      </html>
    </>
  );
};

export default DashboardLayout;
