import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hatim',
  description: 'Kur"an-ı Kerim Hatim Programı',
}

interface Props extends PropsWithChildren {
  
}

function RootLayout({ children }: Props): JSX.Element {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout;