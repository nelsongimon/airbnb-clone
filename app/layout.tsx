import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';
import getCurrentUser from './actions/getCurrentUser';
import Navbar from './components/navbar/Navbar';
import { Nunito } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <ToasterProvider />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  )
}
