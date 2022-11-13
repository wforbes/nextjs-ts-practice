import React, { useState } from 'react'

import { Box, IconButton, Button } from '@mui/material'
import { CounterCard, CounterOutputRow, CounterControlRow, IncrementInput, CountOutput } from './styles'
import { AddCircle, RemoveCircle } from '@mui/icons-material'
import { useAppSelector, useAppDispatch } from '../../hooks'

import {
	decrement,
	increment,
	incrementByAmount,
	incrementAsync,
	incrementIfOdd,
	selectCount
} from '../../slices/counterSlice'

export default function Counter() {
	
	const count = useAppSelector(selectCount)
	const dispatch = useAppDispatch()
	const [incrementAmount, setIncrementAmount] = useState('42')

	const incrementValue = Number(incrementAmount) || 0

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
						Redux TypeScript Quickstart demo!
					</a>.
				</p>
			</Box>
			<CounterCard>
				<CounterOutputRow>
					<IconButton
						size="large"
						aria-label="Decrement value"
						onClick={() => dispatch(decrement())}
					>
						<RemoveCircle color="primary" />
					</IconButton>
					<CountOutput>{count}</CountOutput>
					<IconButton
						size="large"
						aria-label="Increment value"
						onClick={() => dispatch(increment())}
					>
						<AddCircle color="primary" />
					</IconButton>
				</CounterOutputRow>
				<CounterControlRow>
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
}