import type { Metadata } from 'next'

import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import ClientThemeWrapper from '@/context/ClientThemeWrapper'

export const metadata: Metadata = {
	title: 'William Bartz',
	description: 'Sênior FullStack Developer',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" data-theme="dark">
			<ThemeProvider>
				<ClientThemeWrapper>{children}</ClientThemeWrapper>
			</ThemeProvider>
		</html>
	)
}
