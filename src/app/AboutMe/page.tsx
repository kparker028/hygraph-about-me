import React from "react";

const getAboutMeData = async () => {
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

	return data.blogPage;
};

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
