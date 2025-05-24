import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <header className="bg-gray-800 text-white p-4 text-center text-lg font-semibold">
        Hello World
      </header>      
      <body className={`${inter.className} antialiased`}>{children}</body>
      <footer className="bg-gray-800 text-white p-4 text-center text-lg font-semibold">
        Hello World
      </footer>
    </html>
  );
}