import React from 'react'
import { PageWrapper } from '../styles'
import { HomeBanner, HomeCards } from '../components/Home'

export default function Home() {

  return (
    <PageWrapper>
      <HomeBanner />
      <HomeCards />
    </PageWrapper>
  )
}
