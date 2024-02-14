import { graphql } from "../generated/gql";
export const GetAboutMe = graphql(/*GraphQL*/ `
	query GetAboutMe {
		blogPage(where: { slug: "about-me" }) {
			title
			description
			slug
			heroImage {
				url
			}
		}
	}
`);
