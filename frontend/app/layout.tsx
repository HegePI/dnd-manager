import "./global.css"

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextAuthProvider from '../providers/authProvider'
import Footer from "./Footer"
import NavBar from "./NavBar"
import { ApolloWrapper } from "./ApolloWrapper"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DND manager',
  description: 'Manager for all DND',
}

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});

export default function RootLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <NextAuthProvider>
            <NavBar />
            <main>
              {children}
            </main>
            <Footer />
          </NextAuthProvider>
        </ApolloWrapper>
      </body>
    </html >
  )
}
