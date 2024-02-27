import { graphql } from "../generated/gql";

export const GetProjects = graphql(/*GrahphQL*/ `
	query GetProjects {
		projects {
			projectName
			description
			projectImage {
				url
			}
			slug
		}
	}
`);
