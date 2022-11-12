import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// temporary: sorting out how routes are changing on gh-pages
export const useRouteChecker: () => void = () => {
	const router = useRouter()
	useEffect(() => {
		const handleRouteChange = (url: any, { shallow }: any) => {
			console.log(`Changing to ${url} ${shallow ? 'with' : 'without'} shallow routing`)
		}

		router.events.on('routeChangeStart', handleRouteChange)

		return () => {
			router.events.off('routeChangeStart', handleRouteChange)
		}
	}, [router])
}

