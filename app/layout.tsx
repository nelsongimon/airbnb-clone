import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import Navbar from './components/navbar/Navbar';
import { Nunito } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <ToasterProvider />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
