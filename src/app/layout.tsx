import { Inter } from 'next/font/google'
import { PropsWithChildren, Suspense } from 'react'
import './globals.css'
import Loading from './loading'

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
      <Suspense fallback={<Loading />}>
        <body className={inter.className}>
          {children}
        </body>
      </Suspense>
    </html>
  )
}

export default RootLayout;