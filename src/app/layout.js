import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Connexion from "@/components/connexion.modal";
const inter = Inter({ subsets: ["latin"] });
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Heko",
  description: "Ceci est le meilleur app du monde",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider><Connexion/><Header/>{children}</AuthProvider>
      </body>
    </html>
  );
}
