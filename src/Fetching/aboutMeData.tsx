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

export default getAboutMeData;
