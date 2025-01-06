import Image from 'next/image'
import Layout from '@/components/layout'
import { Profile, Repository } from '@/types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

export default async function Home() {
	const profile: Profile = await fetch(
		'https://api.github.com/users/wbartz',
	).then((res) => res.json())

	const repos: Repository[] = await fetch(profile.repos_url).then((res) =>
		res.json(),
	)

	return (
		<Layout profile={profile}>
			<section id="about" className="py-20 bg-gray-800">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center justify-center">
						<Avatar className="mb-8 md:mb-0 md:mr-8 w-52 h-52">
							<AvatarImage src={profile.avatar_url} />
							<AvatarFallback>{profile.name}</AvatarFallback>
						</Avatar>
						<p className="text-xl text-gray-300 max-w-2xl text-center md:text-left">
							{profile.bio}
						</p>
					</div>
				</div>
			</section>

			<section id="projects" className="py-20 bg-gray-900">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
						Repositories
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{repos.map((project) => (
							<Link
								href={project.clone_url}
								target={`_blank`}
								key={project.id}
								className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
							>
								<Image
									src={`/placeholder.svg?height=200&width=400&text=Project+${project.full_name}`}
									alt={`Project ${project.name}`}
									width={400}
									height={200}
									className="w-full h-48 object-cover"
								/>
								<div className="p-4">
									<h3 className="text-xl font-semibold mb-2 text-gray-100">
										{project.name}
									</h3>
									<p className="text-gray-300">{project.description}</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/*<section id="contact" className="py-20 bg-gray-800">*/}
			{/*	<div className="container mx-auto px-4">*/}
			{/*		<h2 className="text-3xl font-bold mb-8 text-center text-gray-100">*/}
			{/*			Contato*/}
			{/*		</h2>*/}
			{/*		<form className="max-w-md mx-auto">*/}
			{/*			<div className="mb-4">*/}
			{/*				<label*/}
			{/*					htmlFor="name"*/}
			{/*					className="block text-gray-300 font-bold mb-2"*/}
			{/*				>*/}
			{/*					Nome*/}
			{/*				</label>*/}
			{/*				<input*/}
			{/*					type="text"*/}
			{/*					id="name"*/}
			{/*					name="name"*/}
			{/*					className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"*/}
			{/*					required*/}
			{/*				/>*/}
			{/*			</div>*/}
			{/*			<div className="mb-4">*/}
			{/*				<label*/}
			{/*					htmlFor="email"*/}
			{/*					className="block text-gray-300 font-bold mb-2"*/}
			{/*				>*/}
			{/*					Email*/}
			{/*				</label>*/}
			{/*				<input*/}
			{/*					type="email"*/}
			{/*					id="email"*/}
			{/*					name="email"*/}
			{/*					className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"*/}
			{/*					required*/}
			{/*				/>*/}
			{/*			</div>*/}
			{/*			<div className="mb-4">*/}
			{/*				<label*/}
			{/*					htmlFor="message"*/}
			{/*					className="block text-gray-300 font-bold mb-2"*/}
			{/*				>*/}
			{/*					Message*/}
			{/*				</label>*/}
			{/*				<textarea*/}
			{/*					id="message"*/}
			{/*					name="message"*/}
			{/*					rows={4}*/}
			{/*					className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"*/}
			{/*					required*/}
			{/*				></textarea>*/}
			{/*			</div>*/}
			{/*			<button*/}
			{/*				type="submit"*/}
			{/*				className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"*/}
			{/*			>*/}
			{/*				Send Message*/}
			{/*			</button>*/}
			{/*		</form>*/}
			{/*	</div>*/}
			{/*</section>*/}
		</Layout>
	)
}
