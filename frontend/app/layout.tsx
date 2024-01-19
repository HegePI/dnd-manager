import "./global.css"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextAuthProvider from '../providers/authProvider'
import Footer from "./Footer"
import NavBarComponent from "./NavBar"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DND manager',
  description: 'Manager for all DND',
}

export default function RootLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <NavBarComponent />
          <main>
            {children}
          </main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
