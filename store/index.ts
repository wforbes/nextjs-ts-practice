import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer
	}
})

// extract RootState type and Dispatch type to reference, like in hooks.ts

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
