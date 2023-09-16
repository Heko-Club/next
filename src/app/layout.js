"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });
import { AuthProvider } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const desiredChainId = ChainId.Polygon;
  // Create a client
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body>
      <ThirdwebProvider desiredChainId={desiredChainId}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {/* Only display Header if path is not /sign */}
          {pathname !== "/sign" && <Header />}
          {children}
        </AuthProvider>
        </QueryClientProvider>
    </ThirdwebProvider>
      </body>
    </html>
  );
}
