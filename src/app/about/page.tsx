import { getAboutMe } from "@/features/about/get-about";
import Image from "next/image";

export const revalidate = 3600;

export default async function AboutPage() {
	const blogPage = await getAboutMe();
	return (
		<main className='mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12'>
			<div className='rounded-2xl border bg-surface p-6 shadow-lg shadow-glow/10 sm:p-8'>
				<p className='mb-2 text-sm font-semibold tracking-[0.16em] text-cyan-accent uppercase'>
					About
				</p>
				<h1 className='text-3xl font-bold tracking-tight text-heading sm:text-4xl'>
					{blogPage?.title}
				</h1>
				<p className='mt-4 max-w-2xl text-lg leading-8 text-body'>
					{blogPage?.description}
				</p>
			</div>
			{blogPage?.heroImage?.url && (
				<Image
					alt={blogPage.title ?? "About me"}
					className='rounded-2xl border bg-elevated shadow-lg shadow-glow/10'
					src={blogPage.heroImage.url}
					width={800}
					height={450}
				/>
			)}
		</main>
	);
}
