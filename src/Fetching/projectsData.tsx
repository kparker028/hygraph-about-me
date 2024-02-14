import { graphqlClient } from "@/graphql/client";
import {
	GetProjectBySlugDocument,
	GetProjectBySlugQueryVariables,
	GetProjectsDocument,
} from "@/graphql/generated/graphql";

export const getProjectsData = async () => {
	const query = `
  query {
   projects {
    projectName
    description
    projectImage {
      url
    }
    slug
  }
}
  `;
	const body = { query };
	const res = await fetch(process.env.HYGRAPH_API_URL, {
		method: "POST",
		body: JSON.stringify(body),
	});
	const { data } = await res.json();

	return data.projects;
};

export const getProjectData = async (slug: string) => {
	const query = `
  query GetProjectBySlug($slug: String!) {
	    project(where: {slug: $slug}) {
	      projectName
	      description
	      projectImage {
	        url
	      }
	    }
    }
	`;

	const variables = {
		slug,
	};

	const body = { query, variables };
	const res = await fetch(process.env.HYGRAPH_API_URL, {
		method: "POST",
		body: JSON.stringify(body),
	});
	const { data, errors } = await res.json();

	if (errors) {
		return null;
	}
	return data.project;
};

export const getProjectDataWTypes = async (
	variables: GetProjectBySlugQueryVariables
) => {
	const res = await graphqlClient.request(GetProjectBySlugDocument, variables);
	return res.project;
};

export const getProjects = async () =>
	await graphqlClient.request(GetProjectsDocument);
