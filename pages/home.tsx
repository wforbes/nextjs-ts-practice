import React, { useState } from 'react'
import { PageWrapper } from '../styles'
import { HomeBanner } from '../components/Home'

import Button from '@mui/material/Button'
import Counter from '../components/Counter'

export default function Home() {

  let [ counterVisible, setCounterVisible ] = useState(false);
  const toggleCounterVisible = () => {
    setCounterVisible(!counterVisible)
  }

  return (
    <PageWrapper>
      <HomeBanner />
      <Button onClick={toggleCounterVisible}>
        {counterVisible ? "Hide" : "Display"} counter example
      </Button>
      {counterVisible && <Counter />}
    </PageWrapper>
  )
}
