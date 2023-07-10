import type { GetStaticProps } from "next";

export const getProjectsData: GetStaticProps<ProjectProps> = async () => {
	const query = `
  query {
   projects {
    projectName
    description
    projectImage {
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
			projects: data.projects,
		},
	};
};

export default getProjectsData;
