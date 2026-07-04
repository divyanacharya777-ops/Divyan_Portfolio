import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Divyan Acharya',
  description: 'Divyan Acharya Portfolio Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='../static/favicon.png' sizes="32x32" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
