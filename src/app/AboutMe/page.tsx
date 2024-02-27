import { GetAboutMe } from "@/Fetching/aboutMeData";
import React from "react";

const AboutMe = async () => {
	const data = await GetAboutMe();
	console.log(data);
	const { blogPage } = data;
	return (
		<div>
			<p>{blogPage?.title}</p>
			<p>{blogPage?.description}</p>
			<p>{blogPage?.slug} </p>
			<img alt='@' src={blogPage?.heroImage?.url} />
		</div>
	);
};

export default AboutMe;
