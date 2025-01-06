import { NavItem } from '@/types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { navItems } from '@/contants/data'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const getPageData = (path: string) =>
	navItems.find((item: NavItem) => item.href === path)
