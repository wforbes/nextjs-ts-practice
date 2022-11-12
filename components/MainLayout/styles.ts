import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export const Main = styled.main`
	min-height: 100vh;
	padding: 2rem 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const AppBarLogoText = styled(Typography)`
	display: inline-block;
`

export const AppBarLogoLink = styled(Link)`
	float: left;
	display: inline-block;
	color: white;
	text-decoration: none;
	margin-right: 0.15em;
`

export const AppBarLogoLParen = styled(Typography)`
	margin: 0 0.1em 0.2em 0.1em !important;
	display: inline-block;
`

export const AppBarLogoDash = styled(Typography)`
	margin: 0 0.15em 0.2em 0.1em !important;
	display: inline-block;
`
export const IconLink = styled.a`
	position: relative;
	top: 0.4em!important;
	width: 2rem;
	height: 3rem;
	display: inline-block;
`

export const AppBarLogoRParen = styled(Typography)`
	margin: 0 0.1em 0.2em 0.15em !important;
	display: inline-block;
`
