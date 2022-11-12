import Head from 'next/head'
import Header from './Header'
import { Main } from './styles'
//import styles from '../../styles/Home.module.css'
//import Footer from './footer'
import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Layout({ children }: { children: ReactNode }) {
	// temporary: sorting out how routes are changing on gh-pages
	const router = useRouter()
	useEffect(() => {
		const handleRouteChange = (url: any, { shallow }: any) => {
			console.log(`Changing to ${url} ${shallow ? 'with' : 'without'} shallow routing`)
		}

		router.events.on('routeChangeStart', handleRouteChange)

		return () => {
			router.events.off('routeChangeStart', handleRouteChange)
		}
	}, [router])

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