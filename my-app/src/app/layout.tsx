import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import './globals.css';

const mono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Neeharika Kuppili',
  description: 'Data Science undergraduate — Python, Machine Learning, NLP',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body className="font-[family-name:var(--font-mono)] antialiased">{children}</body>
    </html>
  );
}
