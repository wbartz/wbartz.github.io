import { Icons } from '@/components/icons'

export enum NavItemsStatus {
	ACTIVE = 'ACTIVE',
	INACTIVE = 'INACTIVE',
	CONSTRUCTION = 'CONSTRUCTION',
}

export interface NavItem {
	title: string
	href?: string
	disabled?: boolean
	external?: boolean
	status: NavItemsStatus
	icon?: keyof typeof Icons
	label?: string
	description?: string
}

export interface Profile {
	avatar_url?: string
	name?: string
	login?: string
	email?: string
	html_url?: string
	location?: string
	repos_url?: string
	bio?: string
}

export interface Repository {
	id?: string
	name?: string
	full_name?: string
	description?: string
	git_url?: string
	clone_url?: string
}
