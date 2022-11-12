import Head from 'next/head'
import Header from './Header'
import { Main } from './styles'
//import styles from '../../styles/Home.module.css'
//import Footer from './footer'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {

  return (
    <>
      <Head>
        <title>NextJS TypeScript MUI practice</title>
        <meta name="description" content="Practice project to learn NextJS with TypeScript" />
        <link rel="icon" type="image/x-icon" href="./images/favicon.ico?" />
      </Head>
      <Header />
      <Main>{children}</Main>
    </>
  )
}