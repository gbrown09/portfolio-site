import Navbar from './compontents/Navbar'
import './globals.css'
import 'tw-elements/dist/css/tw-elements.min.css'
import { Inter, Roboto } from 'next/font/google'
import {library} from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({weight: "400", subsets:["latin"]})
library.add(fab)

export const metadata = {
  title: 'Home',
  description: 'Home page for site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )
}
