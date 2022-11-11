import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const TitleBox = styled(Box)({
	textAlign: 'center'
})

export const PageWrapper = styled.div`
    width:100%;
	min-height: 70vh;
`

export const PageTitle = styled('h1')`
	margin: 0;
	line-height: 1.15;
	font-size: 3rem;
`

export const PageSubtitle = styled.h2`
	margin: 0;
	font-size: 1.5rem;
`
