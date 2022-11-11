import React, { useState } from 'react'
import { PageWrapper, TitleBox, PageTitle, PageSubtitle } from '../styles'
import Button from '@mui/material/Button'
import Counter from '../components/Counter'

export default function Home() {

  let [ counterVisible, setCounterVisible ] = useState(false);
  const toggleCounterVisible = () => {
    setCounterVisible(!counterVisible)
  }

  return (
    <PageWrapper>
      <TitleBox>
        <PageTitle>
          Practice Project
        </PageTitle>
        <PageSubtitle>
          Next.js - Material UI - TypeScript
        </PageSubtitle>
      </TitleBox>
    
      <Button onClick={toggleCounterVisible}>
        {counterVisible ? "Hide" : "Display"} counter example
      </Button>
      {counterVisible && <Counter />}
    </PageWrapper>
  )
}
