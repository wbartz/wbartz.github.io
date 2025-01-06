'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function ConstructionPage() {
	const router = useRouter()

	return (
		<>
			<div className="flex h-screen overflow-hidden">
				<main className="flex-1 overflow-hidden pt-20 pl-10 pr-10">
					<div className="flex flex-col h-full items-center justify-center text-center">
						<span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
							<Image
								width={200}
								height={200}
								alt="Under Construction"
								src="/uc.png"
							/>
						</span>
						<p className="mt-3">
							Oops, a página que você está procurando está em manutenção
						</p>
						<div className="mt-8 flex justify-center gap-2">
							<Button onClick={() => router.back()} variant="default" size="lg">
								Voltar
							</Button>
							<Button
								onClick={() => router.push('/dashboard')}
								variant="secondary"
								size="lg"
							>
								Ir para Home
							</Button>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}
