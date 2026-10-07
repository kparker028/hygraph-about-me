import { getAboutMe } from "@/Fetching/aboutMeData";
import Image from "next/image";

const AboutMe = async () => {
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
};

export default AboutMe;
