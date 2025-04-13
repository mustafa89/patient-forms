import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Patient Forms",
  description: "Patient Forms Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="notranslate">
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
