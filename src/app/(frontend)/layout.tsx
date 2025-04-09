import { Header } from '@/Globals/Header/Header'
import { Footer } from '@/Globals/Footer/Footer'

import './fonts'
import './styles/index.css'

export const metadata = {
  title: 'landing-page',
  description: 'A blank template using Payload in a Next.js app.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="-font-primary">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
