import './global.css';
import Navbar from '@/components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}