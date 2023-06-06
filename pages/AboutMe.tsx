import React from "react";
import type { GetStaticProps } from "next";

type AboutMeProps = {
	title: string;
	description: string;
	slug: string;
	image?: string;
};

const AboutMe = (props: AboutMeProps) => {
	return (
		<div>
			<p>{props.title}</p>
			<p>{props.description}</p>
			<p>{props.slug} </p>
			<img alt='@' src={props.image} />
		</div>
	);
};

export const getStaticProps: GetStaticProps<AboutMeProps> = async () => {
	const query = `
  query {
  blogPage(where: {slug: "about-me"}){
    title
    description
    slug
    heroImage {
      url
    }
  }
}
  `;
	const body = { query };
	const res = await fetch(process.env.HYGRAPH_API_URL, {
		method: "POST",
		body: JSON.stringify(body),
	});
	const { data } = await res.json();

	return {
		props: {
			title: data.blogPage.title,
			description: data.blogPage.description,
			slug: data.blogPage.slug,
			image: data.blogPage.heroImage.url,
		},
	};
};

export default AboutMe;
