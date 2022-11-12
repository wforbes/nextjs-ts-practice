import { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import { Main } from './styles'
//import { useRouteChecker } from '../../hooks'

export default function Layout({ children }: { children: ReactNode }) {
	//useRouteChecker();
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