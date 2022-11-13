import React, { useState } from 'react'
import { PageWrapper } from '../styles'
import { ReduxBanner, ReduxTabs } from '../components/Redux'
import { Box } from '@mui/material'
import styled from '@emotion/styled'

const StyledBox = styled(Box)({
	margin: '0 auto',
	width: '80%'
})

export default function ReduxPage() {

	let [ counterVisible, setCounterVisible ] = useState(false);
	const toggleCounterVisible = () => {
		setCounterVisible(!counterVisible)
	}

	return (
		<PageWrapper>
			<ReduxBanner />
			<StyledBox>
				<ReduxTabs />
			</StyledBox>
		</PageWrapper>
	)
}