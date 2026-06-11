import type { Metadata } from 'next';
import { Caveat, Special_Elite, Geist_Mono } from 'next/font/google';
import './globals.css';

const mono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

const hand = Caveat({
  variable: '--font-hand',
  subsets: ['latin'],
});

const typewriter = Special_Elite({
  variable: '--font-type',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Neeharika Kuppili — Data Science Engineer',
  description: 'Data Science Engineer — Python, Machine Learning, NLP',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} ${hand.variable} ${typewriter.variable}`}>
      <body className="font-[family-name:var(--font-mono)] antialiased">{children}</body>
    </html>
  );
}
