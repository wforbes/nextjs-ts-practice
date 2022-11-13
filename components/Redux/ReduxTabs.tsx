import React from 'react'
import Counter from './Counter'
import { Box, Typography, Tabs, Tab } from '@mui/material'

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
		{value === index && (
			<Box sx={{ p: 3 }}>
				{children}
			</Box>
		)}
		</div>
	)
}

function a11yProps(index: number) {
	return {
		id: `redux-tab-${index}`,
		'aria-controls': `redux-tabpanel-${index}`,
	}
}


export default function ReduxTabs() {

	const [value, setValue] = React.useState(0)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	};

	return (
		<Box>
			<Box>
				<Tabs value={value} onChange={handleChange} aria-label="redux exercise tabs">
					<Tab label="Counter" {...a11yProps(0)}></Tab>
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<Box>
					<Counter />
				</Box>
			</TabPanel>
		</Box>
	)
}