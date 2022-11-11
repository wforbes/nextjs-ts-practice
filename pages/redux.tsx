import React, { useState } from 'react'
import { PageWrapper } from '../styles'
import Button from '@mui/material/Button'
import Counter from '../components/Counter'

export default function ReduxPage() {

	let [ counterVisible, setCounterVisible ] = useState(false);
	const toggleCounterVisible = () => {
		setCounterVisible(!counterVisible)
	}

	return (
		<PageWrapper>
			<Button onClick={toggleCounterVisible}>
				{counterVisible ? "Hide" : "Display"} counter example
			</Button>
			{counterVisible && <Counter />}
		</PageWrapper>
	)
}