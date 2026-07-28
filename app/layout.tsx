import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Poppins, Oswald } from "next/font/google"
import { CartProvider } from "@/lib/cart-context"
import "./globals.css"

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-poppins", display: "swap" })
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-oswald", display: "swap" })

export const metadata: Metadata = {
  title: { default: "Al Quds Fast Food | Rawalpindi", template: "%s | Al Quds Fast Food" },
  description: "Al Quds Fast Food on Harley Street, Rawalpindi. Burgers, Arabian wraps, fried chicken, Chinese food and pasta with home delivery.",
  applicationName: "Al Quds Fast Food",
  keywords: ["Al Quds Fast Food", "Rawalpindi food", "Harley Street Rawalpindi", "burgers Rawalpindi", "food delivery Rawalpindi"],
  authors: [{ name: "Al Quds Fast Food" }],
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = { colorScheme: "dark", themeColor: "#1a1712" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`bg-background ${poppins.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">
        <CartProvider>{children}{process.env.NODE_ENV === "production" && <Analytics />}</CartProvider>
      </body>
    </html>
  )
}
