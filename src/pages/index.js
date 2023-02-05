import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from './Header/Header'
import Banner from './Banner/Banner';
import Body from './Body/Body'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
    </div>
  )
}
