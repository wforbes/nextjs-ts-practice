import Head from 'next/head'
import Header from './Header'
import { Main } from './styles'
//import styles from '../../styles/Home.module.css'
//import Footer from './footer'
import { ReactNode } from 'react'

const getBasePath = () => {
  if (process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY) {
    return `/${process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')}/`
  }
  return "";
};

export default function Layout({ children }: { children: ReactNode }) {
  console.log(process.env);
  
  return (
    <>
      <Head>
        <title>NextJS TypeScript MUI practice</title>
        <meta name="description" content="Practice project to learn NextJS with TypeScript" />
        <link rel="icon" href={`${getBasePath()}/favicon.ico`} />
      </Head>
      <Header />
      <Main>{children}</Main>
    </>
  )
}