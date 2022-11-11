import React from 'react'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

import MuiSvg from '../../assets/mui-svg.jsx'
import { createSvgIcon } from '@mui/material/utils'
import SvgIcon from '@mui/material/SvgIcon'
import reactLogo from '/react.svg'
import styled from '@emotion/styled'
import Image from 'next/image.js'

const MuiIcon = createSvgIcon(
	<MuiSvg />,
	'MuiIcon'
)


const AppBarLogoText = styled(Typography)`
	display: inline-block;
`

const AppBarLogoLink = styled(Link)`
	float: left;
	display: inline-block;
	color: white;
	text-decoration: none;
	margin-right: 0.15em;
`

const AppBarLogoLParen = styled(Typography)`
	margin: 0 0.1em 0.2em 0.1em !important;
	display: inline-block;
`

const AppBarLogoDash = styled(Typography)`
	margin: 0 0.15em 0.2em 0.1em !important;
	display: inline-block;
`
const IconLink = styled.a`
	position: relative;
	top: 0.4em!important;
	width: 2rem;
	height: 3rem;
	display: inline-block;
`

const AppBarLogoRParen = styled(Typography)`
	margin: 0 0.1em 0.2em 0.15em !important;
	display: inline-block;
`

export default function ToolbarLogo() {
	return (
		<div>
			<AppBarLogoText variant="h4" >
				<AppBarLogoLink href="/">
					{"nextjs-mui-ts"}
				</AppBarLogoLink>
			</AppBarLogoText>
			<AppBarLogoLParen variant="h4" >
				{"("}
			</AppBarLogoLParen>
			<IconLink href="https://nextjs.org" target="_blank" rel="noreferrer">
				<Image src="/next-js.svg" width="30" height="32" alt="next.js logo" />
			</IconLink>
			<AppBarLogoDash variant="h4">
				-
			</AppBarLogoDash>
			<IconLink href="https://mui.com" target="_blank" rel="noreferrer">
				<SvgIcon component={MuiIcon} sx={{ width:30, height:32, fill:"white" }} viewBox="0 0 36 32" />
			</IconLink>
			<AppBarLogoDash variant="h4" >
				-
			</AppBarLogoDash>
			<IconLink href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
				<Image src="/typescript.svg" width="30" height="32" alt="typescript logo" />
			</IconLink>
			<AppBarLogoRParen variant="h4" >
				{")"}
			</AppBarLogoRParen>
		</div>
	)
}