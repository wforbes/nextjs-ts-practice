import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'
import Counter from '../components/Counter'

import { styled } from '@mui/system'

export default function Home() {

  const ContentWrapper = styled('div')({
    marginTop: '3em',
    textAlign: 'center'
  })

  let [ counterVisible, setCounterVisible ] = useState(false);
  const toggleCounterVisible = () => {
    setCounterVisible(!counterVisible)
  }

  return (
    <div className={styles.container}>
        <ContentWrapper>
          <h1 className={styles.title}>
            NextJs / TypeScript / Material UI
          </h1>
          <h2>
            practice project
          </h2>
        
          <Button onClick={toggleCounterVisible}>
            {counterVisible ? "Hide" : "Display"} counter example
          </Button>
          {counterVisible && <Counter />}
        </ContentWrapper>
    </div>
  )
}
