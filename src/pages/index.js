import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from './Header/Header'
import Banner from './Banner/Banner';
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
