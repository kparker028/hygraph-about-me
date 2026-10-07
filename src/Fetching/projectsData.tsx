import { graphqlClient } from "@/graphql/client";
import {
	GetProjectBySlugDocument,
	GetProjectBySlugQuery,
	GetProjectBySlugQueryVariables,
	GetProjectsDocument,
	GetProjectsQuery,
	GetProjectsQueryVariables,
} from "@/graphql/generated/graphql";

export const getProjectBySlug = async (
	variables: GetProjectBySlugQueryVariables
) => {
	return (
		await graphqlClient.request<
			GetProjectBySlugQuery,
			GetProjectBySlugQueryVariables
		>(GetProjectBySlugDocument, variables)
	).project;
};

export const getProjects = async () =>
	(
		await graphqlClient.request<GetProjectsQuery, GetProjectsQueryVariables>(
			GetProjectsDocument
		)
	).projects;
