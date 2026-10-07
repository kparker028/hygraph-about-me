import { GraphQLClient } from "graphql-request";

const hygraphApiUrl = process.env.HYGRAPH_API_URL;

if (!hygraphApiUrl) {
	throw new Error("HYGRAPH_API_URL is required.");
}

export const graphqlClient = new GraphQLClient(hygraphApiUrl);
