import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto p-4">
        <Navbar />
        <div className="mt-8">{children}</div>
      </body>
    </html>
  );
}