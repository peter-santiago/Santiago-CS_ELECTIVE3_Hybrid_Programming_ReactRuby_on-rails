import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">  
    <header className="sticky top-0 z-50 bg-gray-800 text-white p-4 text-center">
    Hello World
    </header>
      <body className={`${inter.className} antialiased`}>{children}</body>
      
<footer className="sticky bottom-0 z-50 bg-gray-800 text-white p-4 text-center">
  Hello World
</footer>
    </html>
  );
}