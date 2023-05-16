import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Setting",
  description: "Ini halaman Setting",
};

const DashboardLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <div className="w-screen h-screen bg-gray-200">
            <div className="mt-5 bg-blue-200">{children}</div>
          </div>
        </body>
      </html>
    </>
  );
};

export default DashboardLayout;
