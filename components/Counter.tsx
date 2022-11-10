import React, { useState } from 'react'

import { Box, Card, Grid, Button, TextField } from '@mui/material'
import { styled } from '@mui/system'

import { useAppSelector, useAppDispatch } from '../hooks'

import {
	decrement,
	increment,
	incrementByAmount,
	incrementAsync,
	incrementIfOdd,
	selectCount
} from '../slices/counterSlice'

export default function Counter() {
	
	const count = useAppSelector(selectCount)
	const dispatch = useAppDispatch()
	const [incrementAmount, setIncrementAmount] = useState('42')

	const incrementValue = Number(incrementAmount) || 0

	const CounterCard = styled(Card)({
		padding: '3em'
	})

	const CounterOutputRow = styled(Grid)({
		border: '0.1em solid grey',
		borderRadius: '0.2em',
		padding: '1em 0'
	})

	const CounterControlRow = styled(Grid)({
		marginTop: '2em'
	})

	const IncrementInput = styled(TextField)({
		width: '4em'
	})

	const CountOutput = styled('span')({
		margin: '0 2em'
	})

	return (
		<div>
			<Box>
				<h1>Redux Counter Example</h1>
				<p>
					The Counter component below comes from the&nbsp;
					<a 
						href='https://redux.js.org/tutorials/typescript-quick-start'
						target='_blank'
						rel="noreferrer"
					>
						Redux TypeScript Quickstart demo
					</a>.
				</p>
			</Box>
			<CounterCard>
				<CounterOutputRow container direction="row">
					<Grid item xs={12}>
						<Button
							variant="outlined"
							size="small"
							aria-label="Decrement value"
							onClick={() => dispatch(decrement())}
						>
							-
						</Button>
						<CountOutput>{count}</CountOutput>
						<Button
							variant="outlined"
							size="small"
							aria-label="Increment value"
							onClick={() => dispatch(increment())}
						>
							+
						</Button>
					</Grid>
				</CounterOutputRow>
				<CounterControlRow container direction="row">
					<Grid item xs>
						<IncrementInput
							aria-label='Set increment amount'
							size="small"
							value={incrementAmount}
							onChange={(e: any) => setIncrementAmount(e.target.value)}
						/>
						<Button
							onClick={() => dispatch(incrementByAmount(incrementValue))}
						>
							Add Amount
						</Button>
						<Button
							onClick={() => dispatch(incrementAsync(incrementValue))}
						>
							Add Async
						</Button>
						<Button
							onClick={() => dispatch(incrementIfOdd(incrementValue))}
						>
							Add If Odd
						</Button>
					</Grid>
				</CounterControlRow>
			</CounterCard>
			<Box>
				<div style={{textAlign:'left'}}>
					<p>
						Now I&#39;m spending some time:
					</p>
					<ul >
						<li>
							playing with MUI and styled-components to style it
						</li>
						<li>
							experimenting with adding to / extending the data store
						</li>
					</ul>
				</div>
			</Box>
		</div>
	)
  // omit rendering logic
}