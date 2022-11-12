import React from 'react'
import Image from 'next/image.js'
import MuiSvg from '../../assets/mui-svg.jsx'
import { createSvgIcon } from '@mui/material/utils'
import SvgIcon from '@mui/material/SvgIcon'
import {
	AppBarLogoText,
	AppBarLogoLink,
	AppBarLogoLParen,
	AppBarLogoDash,
	IconLink,
	AppBarLogoRParen
} from './styles'

const MuiIcon = createSvgIcon(
	<MuiSvg />,
	'MuiIcon'
)

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