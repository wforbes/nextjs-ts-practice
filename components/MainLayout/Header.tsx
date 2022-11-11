import { AppBar, Toolbar, Grid, Button } from '@mui/material'
import ToolbarLogo from './ToolbarLogo'

export default function Header() {
	return (
		<AppBar position="relative">
			<Toolbar>
				<Grid container direction="row">
					<Grid item xs={9}>
						<ToolbarLogo />
					</Grid>
					<Grid item xs={3} style={{ textAlign: "right"}}>
						<Button variant="contained" color="secondary" style={{ marginRight: "1rem" }}>
							Sign Up
						</Button>
						<Button variant="text" style={{ color: "white" }}>
							Login
						</Button>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}