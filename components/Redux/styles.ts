import { styled } from '@mui/system'
import { Card, Box, TextField } from '@mui/material'

export const StyledLink = styled('a')(({ theme }) => ({
	color: theme.palette.primary.main
}))

export const CounterCard = styled(Card)({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	width: 'fit-content',
	margin: '0 auto',
	padding: '3em'
})

export const CounterOutputRow = styled(Box)({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	width: 'fit-content',
	border: '0.1em solid grey',
	borderRadius: '0.2em',
	margin: '0 auto',
	padding: '1em 2em'
})

export const CounterControlRow = styled(Box)({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	width: 'fit-content',
	marginTop: '2em'
})

export const IncrementInput = styled(TextField)({
	width: '4em'
})

export const CountOutput = styled('span')({
	padding: '0 1em',
	fontSize: '2em',
	fontWeight: 'bolder'
})
