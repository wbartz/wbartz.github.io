'use client'

import { usePathname } from 'next/navigation'
import UnderConstruction from '@/components/pages/under-construction'
import NotFound from '@/components/pages/not-found'
import { getPageData } from '@/lib/utils'
import { NavItemsStatus } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'William Bartz',
}

export default function StatusPage() {
	const pathName = usePathname()
	const page = getPageData(pathName)

	return page?.status === NavItemsStatus.CONSTRUCTION ? (
		<UnderConstruction />
	) : (
		<NotFound />
	)
}
