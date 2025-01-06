import Link from 'next/link'
import { Profile } from '@/types'

interface Props {
	profile: Profile
	children: React.ReactNode
}

export default function Layout({ children, profile }: Props) {
	return (
		<div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
			<header className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-90 backdrop-blur-sm shadow-md z-10">
				<nav className="container mx-auto px-4 py-4 flex justify-between items-center">
					<Link
						href={profile.html_url!}
						target="_blank"
						className="text-2xl font-bold text-gray-100"
					>
						{profile.name}
					</Link>
					<ul className="flex space-x-4">
						<li>
							<Link href="#about" className="text-gray-300 hover:text-gray-100">
								About
							</Link>
						</li>
						<li>
							<Link
								href="#projects"
								className="text-gray-300 hover:text-gray-100"
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								href="#contact"
								className="text-gray-300 hover:text-gray-100"
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main className="flex-grow pt-16">{children}</main>
			<footer className="bg-gray-800 py-4 text-center text-gray-300">
				© {new Date().getFullYear()} {profile.login}. All rights reserved.
			</footer>
		</div>
	)
}
