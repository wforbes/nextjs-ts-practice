import { AppBar, Toolbar, Grid, Button } from '@mui/material'
import ToolbarLogo from './ToolbarLogo'
import styled from '@emotion/styled'

const SignupButton = styled(Button)`
	margin-right: 1rem;
	color: white;
`

const LoginButton = styled(Button)`
	color: white;
`

export default function Header() {
	return (
		<AppBar position="sticky">
			<Toolbar>
				<Grid container direction="row">
					<Grid item xs={9}>
						<ToolbarLogo />
					</Grid>
					<Grid item xs={3} style={{ textAlign: "right"}}>
						<SignupButton variant="contained" color="secondary">
							Sign Up
						</SignupButton>
						<LoginButton variant="text">
							Login
						</LoginButton>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}