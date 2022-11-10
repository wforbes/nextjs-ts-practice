import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'

import { styled } from '@mui/system'

const ContentWrapper = styled('div')({
  marginTop: '3em'
})

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS TypeScript practice</title>
        <meta name="description" content="Practice project to learn NextJS with TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          NextJs / TypeScript practice
        </h1>
        <ContentWrapper>
          <Button>Yup, this trash code works!<DeleteIcon /></Button>
        </ContentWrapper>
        <div>
          
        </div>
      </main>
    </div>
  )
}
