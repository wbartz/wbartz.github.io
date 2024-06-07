'use client'

import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { Roboto } from 'next/font/google'

const inter = Roboto({ weight: '300', subsets: ['latin'] })

export default function ClientThemeWrapper({ children }: any) {
	const { theme } = useContext(ThemeContext)

	return (
		<body className={inter.className} data-theme={theme}>
			{children}
		</body>
	)
}
