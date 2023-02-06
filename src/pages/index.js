import { Inter } from '@next/font/google'
import Header from './Header/Header'
import Body from './Body/Body'
import LowerBanner from './LowerBanner/LowerBanner'
import Footer from './Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <LowerBanner></LowerBanner>
      <Footer></Footer>
    </div>
  )
}
