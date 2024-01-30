import getAboutMeData from "@/Fetching/aboutMeData";
import React from "react";

const AboutMe = async () => {
	const data = await getAboutMeData();
	console.log(data);
	return (
		<div>
			<p>{data.title}</p>
			<p>{data.description}</p>
			<p>{data.slug} </p>
			<img alt='@' src={data.heroImage.url} />
		</div>
	);
};

export default AboutMe;
