import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import { ThemeProvider } from "./components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Courtney Sidock | Software Engineer",
  description: "Portfolio of Courtney Sidock, a software engineer specializing in AI development",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
            <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Courtney Sidock. All rights reserved.
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

