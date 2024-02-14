import { graphql } from "../generated/gql";
export const GetProjectBySlug = graphql(/* GraphQL */ `
	query GetProjectBySlug($slug: String!) {
		project(where: { slug: $slug }) {
			projectName
			description
			projectImage {
				url
			}
		}
	}
`);
