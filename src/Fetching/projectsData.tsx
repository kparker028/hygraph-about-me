import { graphqlClient } from "@/graphql/client";
import {
	GetProjectBySlugDocument,
	GetProjectBySlugQueryVariables,
	GetProjectsDocument,
} from "@/graphql/generated/graphql";

export const getProjectDataWTypes = async (
	variables: GetProjectBySlugQueryVariables
) => {
	const res = await graphqlClient.request(GetProjectBySlugDocument, variables);
	return res.project;
};

export const getProjects = async () =>
	await graphqlClient.request(GetProjectsDocument);
