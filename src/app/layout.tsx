import React from 'react'
import './globals.css'


import { Poppins } from 'next/font/google'
import { NextAuthProvider } from '@/provider/auth'

const poppins = Poppins({ subsets: ['latin'], weight:['400','600','700','900'] })

export const metadata = {
  title: 'Full Stack Week Trips',
  description: 'Sistema de Reserva de Viagens!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <h1>Header</h1>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
        </body>
    </html>
  )
}
