import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
      <Header />
      {children}
      <Footer/>
      </body>
    </html>
  )
}
