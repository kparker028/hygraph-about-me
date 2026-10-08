import { getAboutMe } from "@/features/about/get-about";
import Image from "next/image";

export const revalidate = 3600;

export default async function AboutPage() {
	const blogPage = await getAboutMe();
	return (
		<div>
			<p>{blogPage?.title}</p>
			<p>{blogPage?.description}</p>
			<p>{blogPage?.slug} </p>
			{blogPage?.heroImage?.url && (
				<Image
					alt={blogPage.title ?? "About me"}
					src={blogPage.heroImage.url}
					width={800}
					height={450}
				/>
			)}
		</div>
	);
}
