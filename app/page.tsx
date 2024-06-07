import { ThemeSwitcher } from '@/components'

export const revalidate = 3600

export default async function Home() {
	return (
		<main className="min-w-screen min-h-screen">
			<div className=" h-[40px] w-screen flex justify-end p-8">
				<ThemeSwitcher />
			</div>
		</main>
	)
}
