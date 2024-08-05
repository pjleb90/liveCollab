import { Inter as FontSans } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "liveCollab",
  description: "Bringing teams together",
  icons: {
    icon: "/favicon.ico",
  },
}
export default function RootLayout({ children }:{ children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
