import { Repo } from '@/types'

export const revalidate = 3600

async function getData() {
	const res = await fetch('https://api.github.com/users/wbartz/repos', {
		cache: 'force-cache',
	})
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Home() {
	const repos = await getData()

	return (
		<main className="min-h-screen min-w-screen flex flex-col justify-center">
			<ul className="flex gap-2 flex-wrap justify-center items-center">
				{repos?.map((repo: Repo) => (
					<li
						key={repo.id}
						className="card w-96 h-40 bg-neutral text-neutral-content cursor-pointer"
					>
						<div className="card-body items-center text-center">
							<h2 className="card-title">{repo.full_name}</h2>
							<p className="text-sm">{repo.html_url}</p>
						</div>
					</li>
				))}
			</ul>
		</main>
	)
}
