import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.className} antialiased`}>
        <header className="sticky top-0 z-50 bg-gray-800 text-white p-4 text-center">
          Hello World
        </header>

        <main>{children}</main>

        <footer className="sticky bottom-0 z-50 bg-gray-800 text-white p-4 text-center">
          Hello World
        </footer>
      </body>
    </html>
  );
}
