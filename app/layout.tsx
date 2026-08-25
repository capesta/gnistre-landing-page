import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Momentum — Personal progress for real life',
  description: 'A simple, private way to keep track of the things you do — from running and football to coding, writing and everything in between.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
