import type {Metadata} from 'next';
import localFront from 'next/font/local';
import './globals.css';

const font = localFront({
  src: './Strawberry_Muffins_Demo.ttf',
});

export const metadata: Metadata = {
  title: 'ELON',
  description: 'ELON',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
