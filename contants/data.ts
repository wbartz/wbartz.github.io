import { NavItem, NavItemsStatus } from '@/types'

export const navItems: NavItem[] = [
	{
		title: 'Home',
		href: '/',
		icon: 'logo',
		status: NavItemsStatus.CONSTRUCTION,
	},
	{
		title: 'hashs',
		href: '/hashs',
		icon: 'hash',
		status: NavItemsStatus.ACTIVE,
	},
	{
		title: 'base64',
		href: '/base64',
		icon: 'hash',
		status: NavItemsStatus.ACTIVE,
	},
	{
		title: 'json',
		href: '/json',
		icon: 'json',
		status: NavItemsStatus.INACTIVE,
	},
	{
		title: 'generator',
		href: '/generator',
		icon: 'json',
		status: NavItemsStatus.CONSTRUCTION,
	},
]
